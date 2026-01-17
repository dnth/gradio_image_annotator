<script lang="ts">
	import { onMount, createEventDispatcher, tick } from "svelte";
	import { Download, Image as ImageIcon } from "@gradio/icons";
	import { DownloadLink } from "@gradio/wasm/svelte";
	import { uploadToHuggingFace } from "@gradio/utils";
	import { BlockLabel, IconButton, ShareButton, SelectSource} from "@gradio/atoms";
	import { Upload } from "@gradio/upload";
	import { Webcam } from "@gradio/image";
	import type { FileData, Client } from "@gradio/client";
	import type { I18nFormatter, SelectData } from "@gradio/utils";
	import { Clear } from "@gradio/icons";
	import { Fullscreen, ExitFullscreen } from "./icons/index";
	import ImageCanvas from "./ImageCanvas.svelte";
	import AnnotatedImageData from "./AnnotatedImageData";

	type source_type = "upload" | "webcam" | "clipboard" | null;

	export let value: null | AnnotatedImageData;
	export let label: string | undefined = undefined;
	export let show_label: boolean;
	export let sources: source_type[] = ["upload", "webcam", "clipboard"];
	export let selectable = false;
	export let root: string;
	export let interactive: boolean;
	export let i18n: I18nFormatter;
	export let showShareButton: boolean;
	export let showDownloadButton: boolean;
	export let showClearButton: boolean;
	export let boxesAlpha;
	export let labelList: string[];
	export let labelColors: string[];
	export let boxMinSize: number;
	export let handleSize: number;
	export let height: number | string;
	export let width: number | string;
	export let boxThickness: number;
	export let disableEditBoxes: boolean;
	export let singleBox: boolean;
	export let showRemoveButton: boolean;
	export let handlesCursor: boolean;
	export let boxSelectedThickness: number;
	export let max_file_size: number | null = null;
	export let cli_upload: Client["upload"];
	export let stream_handler: Client["stream_factory"];
	export let useDefaultLabel: boolean;
	export let enableKeyboardShortcuts: boolean;
	export let showBoxLabels: boolean;
	export let readOnlyBoxes: boolean = false;

	let upload: Upload;
	let uploading = false;
	let isFullscreen = false;
	let imageContainer: HTMLDivElement;
	export let active_source: source_type = null;

	function handle_upload({ detail }: CustomEvent<FileData>): void {
		value = new AnnotatedImageData();
		value.image = detail;
		dispatch("upload");
	}

	async function handle_save(img_blob: Blob | any): Promise<void> {
		const f = await upload.load_files([new File([img_blob], `webcam.png`)]);
		const image = f?.[0] || null;
		if (image) {
			value = new AnnotatedImageData();
			value.image = image;
		} else {
			value = null;
		}
		await tick();
		dispatch("change");
	}

	$: if (uploading) clear();

	const dispatch = createEventDispatcher<{
		change: undefined;
		clear: undefined;
		drag: boolean;
		upload?: never;
		select: SelectData;
	}>();

	let dragging = false;

	$: dispatch("drag", dragging);

	$: if (!active_source && sources) {
		active_source = sources[0];
	}

	async function handle_select_source(
		source: (typeof sources)[number]
	): Promise<void> {
		switch (source) {
			case "clipboard":
				upload.paste_clipboard();
				break;
			default:
				break;
		}
	}

	function clear() {
		value = null;
		dispatch("clear");
		dispatch("change");
	}

	async function toggleFullscreen(): Promise<void> {
		if (!imageContainer) return;

		if (!document.fullscreenEnabled) {
			console.warn("Fullscreen API is not available");
			return;
		}

		if (!isFullscreen) {
			try {
				await imageContainer.requestFullscreen();
			} catch (error) {
				console.error("Failed to enter fullscreen:", error);
			}
		} else {
			try {
				await document.exitFullscreen();
			} catch (error) {
				console.error("Failed to exit fullscreen:", error);
			}
		}
	}

	function handleFullscreenChange(): void {
		isFullscreen = !!document.fullscreenElement;
	}

	onMount(() => {
		document.addEventListener("fullscreenchange", handleFullscreenChange);
		return () => {
			document.removeEventListener("fullscreenchange", handleFullscreenChange);
		};
	});
</script>

<BlockLabel {show_label} Icon={ImageIcon} label={label || "Image Annotator"} />

<div class="icon-buttons">
	{#if showDownloadButton && value !== null}
		<DownloadLink href={value.image.url} download={value.image.orig_name || "image"}>
			<IconButton Icon={Download} label={i18n("common.download")} />
		</DownloadLink>
	{/if}
	{#if showShareButton && value !== null}
		<ShareButton
			{i18n}
			on:share
			on:error
			formatter={async (value) => {
				if (value === null) return "";
				let url = await uploadToHuggingFace(value.image, "base64");
				return `<img src="${url}" />`;
			}}
			{value}
		/>
	{/if}
	{#if showClearButton && value !== null && interactive}
		<div>
			<IconButton
				Icon={Clear}
				label="Remove Image"
				on:click={clear}
			/>
		</div>
	{/if}
	{#if value !== null && interactive}
		<div>
			<IconButton
				Icon={isFullscreen ? ExitFullscreen : Fullscreen}
				label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
				on:click={toggleFullscreen}
			/>
		</div>
	{/if}
</div>

<div data-testid="image" class="image-container" bind:this={imageContainer}>
	<div class="upload-container">
		<Upload
			hidden={value !== null || active_source === "webcam"}
			bind:this={upload}
			bind:uploading
			bind:dragging
			filetype={active_source === "clipboard" ? "clipboard" : "image/*"}
			on:load={handle_upload}
			on:error
			{root}
			{max_file_size}
			disable_click={!sources.includes("upload")}
			upload={cli_upload}
			{stream_handler}
		>
			{#if value === null}
				<slot />
			{/if}
		</Upload>
		{#if value === null && active_source === "webcam"}
			<Webcam
				{root}
				on:capture={(e) => handle_save(e.detail)}
				on:stream={(e) => handle_save(e.detail)}
				on:error
				on:drag
				on:upload={(e) => handle_save(e.detail)}
				mode="image"
				include_audio={false}
				{i18n}
				{upload}
			/>
		{/if}
		{#if value !== null}
			<div class:selectable class="image-frame">
				<ImageCanvas
					bind:value
					on:change={() => dispatch("change")}
					{height}
					{width}
					{boxesAlpha}
					{labelList}
					{labelColors}
					{boxMinSize}
					{interactive}
					{handleSize}
					{boxThickness}
					{singleBox}
					{disableEditBoxes}
					{showRemoveButton}
					{handlesCursor}
					{boxSelectedThickness}
					{useDefaultLabel}
					{enableKeyboardShortcuts}
					{showBoxLabels}
					{readOnlyBoxes}
					src={value.image.url}
				/>
			</div>
		{/if}
	</div>
	{#if (sources.length > 1 || sources.includes("clipboard")) && value === null && interactive}
		<SelectSource
			{sources}
			bind:active_source
			handle_clear={clear}
			handle_select={handle_select_source}
		/>
	{/if}
</div>

<style>
	.image-frame :global(img) {
		width: var(--size-full);
		height: var(--size-full);
		object-fit: cover;
	}

	.image-frame {
		object-fit: cover;
		width: 100%;
	}

	.upload-container {
		height: 100%;
		width: 100%;
		flex-shrink: 1;
		max-height: 100%;
	}

	.image-container {
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-height: 100%;
	}

	.selectable {
		cursor: crosshair;
	}

	.icon-buttons {
		display: flex;
		position: absolute;
		top: 6px;
		right: 6px;
		gap: var(--size-1);
	}

	.image-container:fullscreen {
		background-color: var(--color-background-primary);
		padding: var(--size-2);
	}

	.image-container:fullscreen .icon-buttons {
		z-index: 9999;
	}
</style>
