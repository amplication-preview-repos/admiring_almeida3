import { Playlist as TPlaylist } from "../api/playlist/Playlist";

export const PLAYLIST_TITLE_FIELD = "id";

export const PlaylistTitle = (record: TPlaylist): string => {
  return record.id?.toString() || String(record.id);
};
