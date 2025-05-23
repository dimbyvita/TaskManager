export interface Project {
  id: number;
  name: string;
  delai: string;
  hours: number;
  priority: 'High' | 'Medium' | 'Low';
  members: string[];
  progress: number;
}
