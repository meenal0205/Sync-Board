export enum CanvasMode{
    None,
    Pressing,
    SelectionNet,
    Translating,
    Inserting,
    Resizing,
    Pencil 
}

export type CanvasState= 
|{
    mode:CanvasMode.None
} 
|{
    mode:CanvasMode.SelectionNet
}
|{
    mode:CanvasMode.Pencil
}
|{
    mode:CanvasMode.Resizing
}
|{
    mode:CanvasMode.Translating
}
|{
    mode:CanvasMode.Inserting
}
|{
    mode:CanvasMode.Pressing
}
