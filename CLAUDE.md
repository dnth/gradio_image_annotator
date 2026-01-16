# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**gradio_image_annotation** is a custom Gradio component for annotating images with bounding boxes. It provides an interactive web-based interface for drawing, editing, and managing bounding boxes on images, with support for labels, colors, and image manipulation (rotation, zoom, pan).

**Repository**: https://github.com/edgarGracia/gradio_image_annotator

## Development Commands

### Installation and Setup
```bash
# Install in development mode (recommended)
pip install -e .

# Or install from built package
pip install .
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
3. Pass to frontend via `super().__init__()`
4. Handle in `preprocess()` or `postprocess()` if data conversion needed

### Frontend Changes (Svelte/TypeScript)
1. Edit files in `frontend/shared/`
2. Rebuild frontend using Gradio SDK (placed in `backend/gradio_image_annotation/templates/`)
3. Reinstall Python package: `pip install -e .`

## Component Configuration

Key parameters (from `__init__`):
- `label_list`: Predefined labels for boxes
- `label_colors`: RGB tuples or hex colors for each label
- `single_box`: Restrict to one box
- `disable_edit_boxes`: Hide label/color editing
- `use_default_label`: Auto-apply first label from `label_list`
- `enable_keyboard_shortcuts`: Toggle keyboard shortcuts
- `image_type`: "numpy", "pil", or "filepath" for callback output
- `boxes_alpha`, `box_thickness`, `handle_size`: Visual styling
- `sources`: ["upload", "webcam", "clipboard"]

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

## Type Definitions

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
