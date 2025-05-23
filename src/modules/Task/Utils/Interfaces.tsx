import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  addIcon?: React.ReactElement<typeof IoAddCircleOutline>;
  cancelIcon?: React.ReactElement<typeof MdOutlineCancel>;
  addTask: (newTask: Task) => void;
}
export enum ColorPickerVariant {
  Predefined = "predefined",
  Free = "free"
}
  
export interface ColorPickerProps {
  color: string;
  colors: Array<string>;
  onChange(color: string): void;
  variant: ColorPickerVariant;
}

export interface Task {
  forEach(arg0: (event: any) => void): unknown;
  id: string | number;
  title: string;
  description?: string | any;
  status: 'pending' | 'onHold' | 'inProgress' | 'completed';
  departement: string | number;
  fromOrigin: boolean;
  delai?: {
    dayStart: string;
    dayEnd: string;
  };
  owner: string;
  quantity: number;
}

export interface UseDragResult {
  draggedTask: Task | null;
  handleOnDragStart: (e:React.DragEvent, task: Task) => void;
  handleOnDrop: (e:React.DragEvent, targetStatus: 'pending' | 'onHold' | 'inProgress' | 'completed') => Promise<Task | null>;
  handleOnDragOver: (e:React.DragEvent) => void;
}
