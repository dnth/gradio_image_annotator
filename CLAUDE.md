# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**gradio_image_annotation** is a custom Gradio component for annotating images with bounding boxes. It provides an interactive web-based interface for drawing, editing, and managing bounding boxes on images, with support for labels, colors, and image manipulation (rotation, zoom, pan).

**Repository**: https://github.com/edgarGracia/gradio_image_annotator

## Development Commands

### Installation and Setup
```bash
# Using uv (recommended)
uv pip install -e .

# Using pip
pip install -e .

# Or install from built package
uv pip install .  # or pip install .
```

### Running the Demo
```bash
python demo/app.py
```
The demo will be available at http://localhost:7860

### Building the Package
```bash
# Build for PyPI (includes frontend templates)
python -m build

# Build only frontend (via Gradio SDK in frontend/)
# The built frontend is placed in backend/gradio_image_annotation/templates/
```

### Testing
No automated test suite exists. Test manually using `demo/app.py`.

## Architecture

This is a **Gradio Custom Component** with a clear separation between Python backend and Svelte/TypeScript frontend.

### Directory Structure
```
backend/gradio_image_annotation/   # Python package
├── image_annotator.py             # Main component class (Component API)
├── __init__.py                    # Exports image_annotator
└── templates/                     # Compiled frontend (built JS/CSS)

frontend/                          # Svelte/TypeScript source
├── Index.svelte                   # Gradio integration layer
├── Example.svelte                 # Example showcase
└── shared/                        # Shared modules
    ├── ImageAnnotator.svelte      # UI wrapper
    ├── Canvas.svelte              # Core interaction logic
    ├── Box.ts                     # Bounding box class
    ├── AnnotatedImageData.ts      # Data model
    └── WindowViewer.ts            # Viewport/pan/zoom logic

demo/app.py                        # Demo application
```

### Data Flow

```
User Interaction (Frontend)
    → Canvas Events (Canvas.svelte)
    → Box Objects (Box.ts)
    → State Update (ImageAnnotator.svelte)
    → Gradio Event (Index.svelte)
    → preprocess() (Python)
    → User Callback
    → postprocess() (Python)
    → Frontend Update
```

### Key Backend Classes (image_annotator.py)

**`image_annotator`** - Main component extending `gradio.components.base.Component`
- `__init__()`: Configuration and parameter validation
- `preprocess()`: Converts frontend `AnnotatedImageData` to Python `AnnotatedImageValue`
- `postprocess()`: Converts Python `AnnotatedImageValue` to frontend `AnnotatedImageData`
- `preprocess_image()`: Handles image loading, EXIF orientation, format conversion
- `preprocess_boxes()`: Parses box coordinates and colors from frontend

**Data Models:**
- `AnnotatedImageData` (GradioModel): Frontend format with `FileData` image
- `AnnotatedImageValue` (TypedDict): Python format with numpy/PIL/filepath image

### Key Frontend Classes

**Box.ts** - Bounding box state and logic:
- Coordinates (xmin, ymin, xmax, ymax) in image space
- Label and color
- Handles drag, resize (8 handles), create operations
- Coordinate transformation between screen/image space
- Rotation transformation support

**WindowViewer.ts** - Viewport management:
- Canvas pan, zoom, offset
- Drag-to-pan functionality
- Image/canvas coordinate mapping

**AnnotatedImageData.ts** - Frontend data model:
```typescript
{
  image: FileData,
  boxes: Box[],
  orientation: number  // 0-3, 90-degree clockwise rotations
}
```

### Component Hierarchy (Frontend)

```
Index.svelte (Gradio integration)
    └── ImageAnnotator.svelte (UI wrapper: upload, buttons, modes)
            ├── ImageCanvas.svelte (Canvas rendering)
            └── Canvas.svelte (Core interaction: mouse, touch, keyboard)
                    └── ModalBox.svelte (Label/color editor)
```

## Box Coordinate System

Boxes use **absolute image coordinates** (xmin, ymin, xmax, ymax). The frontend scales coordinates by `scaleFactor` when the image is displayed at different sizes. The backend `preprocess_boxes()` divides by `scaleFactor` to get original image coordinates.

## Adding New Features

### Backend Changes (Python)
1. Edit `backend/gradio_image_annotation/image_annotator.py`
2. Add parameters to `__init__()`
3. Store as instance variable (e.g., `self.my_param = my_param`)
4. Pass to frontend via `super().__init__()` (for standard Gradio props)
5. Handle in `preprocess()` or `postprocess()` if data conversion needed

### Frontend Changes (Svelte/TypeScript)

#### Adding a Toggle Button

To add a new toggle button (like the labels visibility toggle):

1. **Create icons** in `frontend/shared/icons/`:
   - `MyFeatureVisible.svelte` - Icon when feature is enabled
   - `MyFeatureHidden.svelte` - Icon when feature is disabled

2. **Export icons** in `frontend/shared/icons/index.ts`:
   ```typescript
   export { default as MyFeatureVisible } from "./MyFeatureVisible.svelte";
   export { default as MyFeatureHidden } from "./MyFeatureHidden.svelte";
   ```

3. **Update Canvas.svelte**:
   - Import the new icons
   - Add local state variable: `let myFeatureVisible = true;`
   - Add toggle function that updates state and calls `draw()`
   - Add button in the canvas control section with conditional icon rendering
   - Add CSS class for active state

4. **Rebuild frontend**: `uv run gradio cc build`

5. **Reinstall package**: `uv pip install -e .`

#### General Frontend Changes

1. Edit files in `frontend/shared/`
2. Rebuild frontend using Gradio SDK (placed in `backend/gradio_image_annotation/templates/`)
3. Reinstall Python package: `uv pip install -e .` (or `pip install -e .`)

## Component Configuration

Key parameters (from `__init__`):
- `label_list`: Predefined labels for boxes
- `label_colors`: RGB tuples or hex colors for each label
- `single_box`: Restrict to one box
- `disable_edit_boxes`: Hide label/color editing
- `use_default_label`: Auto-apply first label from `label_list`
- `enable_keyboard_shortcuts`: Toggle keyboard shortcuts
- `show_box_labels`: Display labels on bounding boxes (default: True)
- `image_type`: "numpy", "pil", or "filepath" for callback output
- `boxes_alpha`, `box_thickness`, `handle_size`: Visual styling
- `sources`: ["upload", "webcam", "clipboard"]

### Canvas Control Buttons

The component has a canvas control bar at the bottom with the following buttons:
- **Create/Drag mode**: Toggle between drawing and moving boxes
- **Remove box**: Delete the selected box (Trash icon)
- **Edit label**: Edit the default label for new boxes (Label icon)
- **Toggle labels**: Show/hide all bbox labels dynamically (Text icon)
- **Rotate**: Rotate image clockwise/counterclockwise
- **Zoom**: Reset zoom, zoom in/out

## Keyboard Shortcuts (Default)
- `C`: Create mode
- `D`: Drag mode
- `E`: Edit selected box
- `Delete`: Remove selected box
- `Space`: Reset view (zoom/pan)
- `Enter`: Confirm modal dialog
- `Escape`: Cancel/close modal dialog

## Dependencies

**Python:** `gradio>=4.29,<6.0`, `numpy`, `Pillow`

**Frontend:** `@gradio/*` components, `cropperjs`, `svelte`

## Building Custom Components Guide

This section covers the key concepts and workflow for building Gradio custom components, adapted for the `uv` stack.

### Prerequisites

- Python 3.10+
- uv (recommended) or pip 21.3+
- Node.js 20+
- npm 9+
- Gradio 5+

### The 4-Step Workflow

```
create → dev → build → publish
```

#### 1. Create - Bootstrap a Template

```bash
uv run gradio cc create MyComponent --template SimpleTextbox
```

This creates a directory structure:
```
- backend/     # Python code for your custom component
- frontend/    # JavaScript/Svelte code
- demo/        # Sample app for development
- pyproject.toml  # Package metadata and build config
```

Available templates include:
- `SimpleTextbox` - Stripped-down Textbox (best for beginners)
- `SimpleDropdown`
- `SimpleImage`
- `File`

To list all templates: `uv run gradio cc show`

#### 2. Dev - Development Server with Hot Reloading

```bash
# From your component directory
uv run gradio cc dev
```

Launches a demo app at http://localhost:7861/ (port may vary) with hot reloading. Changes to backend and frontend are reflected live.

#### 3. Build - Create Python Package

```bash
# From your component directory
uv run gradio cc build
```

Creates `tar.gz` and `.whl` files in `dist/`. These can be installed with:
```bash
uv pip install dist/your_component-0.0.1-py3-none-any.whl
```

The build command also generates documentation (interactive space + README.md). Disable with `--no-generate-docs`.

#### 4. Publish - Share with the World

```bash
uv run gradio cc publish
```

Guides you through:
1. Uploading to PyPI (requires PyPI account)
2. Publishing a demo to Hugging Face Spaces (optional)

### Key Component Concepts

#### Interactive vs Static

Every Gradio component has two modes:
- **Interactive**: User can change the value (used as input to events)
- **Static**: Display-only mode (used as output or standalone)

**Requirements:**
- Backend: Must accept `interactive` boolean in `__init__()`
- Frontend: May accept `interactive` prop to toggle behavior

#### Preprocess and Postprocess

Every component must implement these methods:

```python
def preprocess(self, x: Any) -> Any:
    """
    Convert from web-friendly (JSON) frontend value
    to format expected by Python function.
    """
    return x

def postprocess(self, y: Any) -> Any:
    """
    Convert from Python function return value
    to web-friendly (JSON) frontend value.
    """
    return y
```

**Examples:**
- `Image` component: Frontend sends filepath → `preprocess()` converts to numpy array
- `Audio` component: Frontend sends file data → `preprocess()` loads as audio array

#### The `data_model` Pattern

Defining a `data_model` (pydantic model) simplifies component development by automatically implementing:
- API usage methods (`api_info`)
- Flagging methods (`flag`, `read_from_flag`)
- Example caching methods

```python
from gradio.data_classes import FileData, GradioModel

class VideoData(GradioModel):
    video: FileData
    subtitles: Optional[FileData] = None

class Video(Component):
    data_model = VideoData
```

**Key Points:**
- Use `FileData` for any file uploads/returns (required for proper file handling)
- `GradioModel` wraps data in a dictionary: `{'video': ..., 'subtitles': ...}`
- `GradioRootModel` serializes directly to the inner value (no wrapper)

### Backend Implementation

#### Which Class to Inherit From

- `FormComponent`: Groups in Form layouts (Slider, Textbox, Number)
- `BlockContext`: Can contain other components (`with block:` syntax)
- `Component`: All other cases (default)
- `StreamingOutput`: For components with streaming output

#### Required Methods

| Method | Purpose |
|--------|---------|
| `preprocess(x)` | Frontend → Python conversion |
| `postprocess(y)` | Python → Frontend conversion |
| `process_example(x)` | Convert value for examples preview (optional) |
| `api_info()` | JSON schema for API clients (auto from `data_model`) |
| `example_payload()` | Example input for View API page |
| `flag(x, flag_dir)` | Format value for flagging CSV/JSON (auto from `data_model`) |
| `read_from_flag(x)` | Convert flagged data to component value (auto from `data_model`) |

#### Event Triggers

Define custom events in the `EVENTS` class attribute:

```python
from gradio.events import Events
from gradio.components import FormComponent

class MyComponent(FormComponent):
    EVENTS = [
        "text_submit",
        "file_upload",
        Events.change
    ]
```

This automatically adds `text_submit()`, `file_upload()`, and `change()` methods to your component.

### Frontend Implementation

#### Directory Structure

Minimum required files:
- `Index.svelte` - Main component (layout and logic)
- `Example.svelte` - Example view for Gradio Examples

#### Index.svelte Props

```typescript
import type { LoadingStatus } from "@gradio/statustracker";
import type { Gradio } from "@gradio/utils";

export let gradio: Gradio<{
    event_1: never;
    event_2: never;
}>;

export let elem_id = "";
export let elem_classes: string[] = [];
export let scale: number | null = null;
export let min_width: number | undefined = undefined;
export let loading_status: LoadingStatus | undefined = undefined;
export let mode: "static" | "interactive";
```

- `elem_id`/`elem_classes`: For custom CSS/JS targeting
- `scale`/`min_width`: UI sizing
- `loading_status`: Display loading during processing
- `mode`: Toggle between static/interactive
- `gradio`: App-level config, use for dispatching events

#### Example.svelte Props

```typescript
export let value: string;
export let type: "gallery" | "table";
export let selected = false;
export let index: number;
```

#### Handling Files

Use `@gradio/client` utilities for file uploads:

```typescript
import { upload, prepare_files, type FileData } from "@gradio/client";

export let root;  // Base URL for uploads

async function handle_upload(file_data: FileData[]): Promise<void> {
    await tick();
    uploaded_files = await upload(file_data, root);
}

async function loadFiles(files: FileList): Promise<void> {
    let _files: File[] = Array.from(files);
    if (!files.length) return;
    let file_data = await prepare_files(_files);
    await handle_upload(file_data);
}
```

For WASM support, get the upload function from Context:
```typescript
const upload_fn = getContext<typeof upload_files>("upload_files");
await upload(file_data, root, upload_fn);
```

#### Leveraging Existing Gradio Components

Most Gradio frontend components are published on npm. Use them to save time:

```typescript
import { type FileData, Upload, ModifyUpload } from "@gradio/upload";
import { Empty, UploadText, BlockLabel } from "@gradio/atoms";
```

Explore available components via [Storybook](https://gradio-shimley.vercel.app/).

#### Custom Configuration (gradio.config.js)

Place in `frontend/` root to customize build:

```javascript
import tailwindcss from "@tailwindcss/vite";

export default {
    // Vite plugins
    plugins: [tailwindcss()],

    // Svelte options
    svelte: {
        preprocess: [mdsvex()],
        extensions: [".svelte", ".svx"],
        build: {
            target: "esnext"  // For newer JS features
        }
    }
};
```

### Installation (uv-based)

```bash
# Development installation
uv pip install -e .

# Install from built package
uv pip install .

# With specific Python version
uv pip install -e . --python 3.12
```

### Useful Commands

```bash
uv run gradio cc --help                    # Show all commands
uv run gradio cc create --help             # Help for specific command
uv run gradio cc show                      # List available templates
uv run gradio cc docs                      # Generate documentation
```

### Type Definitions

Box dict format (Python):
```python
{
    "xmin": int,
    "ymin": int,
    "xmax": int,
    "ymax": int,
    "label": str,      # optional
    "color": tuple     # optional, RGB tuple like (255, 0, 0)
}
```

Component value format (Python):
```python
{
    "image": np.ndarray | PIL.Image | str,
    "boxes": List[dict],
    "orientation": int  # 0-3, clockwise 90-degree rotations
}
```
