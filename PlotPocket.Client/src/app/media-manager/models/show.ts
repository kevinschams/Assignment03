export interface Show {
  id: number; // If this is something other than 0, it is bookmarked
  showApiId: number;
  type: string;
  title: string;
  date: Date;
  isBookmarked: boolean;
  posterPath: string;
}
