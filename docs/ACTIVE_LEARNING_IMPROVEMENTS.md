# Active Learning Workflow Improvements

This document tracks planned improvements to support active learning object detection workflows.

## Proposed Features

### 1. Undo/Redo System (High Priority)
- [ ] Track box create/delete/move/resize actions
- [ ] Add action stack in `Canvas.svelte`
- [ ] Keyboard shortcuts: `Ctrl+Z` (undo), `Ctrl+Shift+Z` (redo)

### 2. Model Prediction Support (High Priority)
- [ ] New box property: `source: "prediction" | "ground_truth"`
- [ ] Visual distinction (dashed outlines for predictions)
- [ ] Accept/reject buttons per box
- [ ] Bulk actions: "Accept All", "Reject All"

### 3. Confidence Score Display (High Priority)
- [ ] New box property: `confidence: float` (0-1)
- [ ] Display score on box label (e.g., "car 0.87")
- [ ] Color gradient based on confidence
- [ ] Filter controls: hide boxes below threshold

### 4. Batch Navigation (Medium Priority)
- [ ] Previous/Next buttons with shortcuts (`←`, `→`)
- [ ] Image counter display (e.g., "3 / 47")
- [ ] Auto-save on navigation
- [ ] Jump to specific index

### 5. Labeling Speed Improvements (Medium Priority)
- [ ] Quick-label mode: click to place default-sized box
- [ ] Label hotkeys: `1-9` keys to set active label
- [ ] Copy/paste boxes: `Ctrl+C`, `Ctrl+V`
- [ ] Smart defaults: remember last used label/color

## Priority Matrix

| Feature | Complexity | Impact |
|---------|------------|--------|
| Undo/Redo | Medium | High |
| Confidence display | Low | High |
| Prediction styling | Low | High |
| Label hotkeys (1-9) | Low | Medium |
| Batch navigation | Medium | High |
| Accept/reject predictions | Medium | High |
| Copy/paste boxes | Medium | Medium |
