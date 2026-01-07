import { randomUUID } from "node:crypto";

export class DatabaseMemory {
  #videos = new Map();

  list(search) {
    const values = this.#videos.entries();
    return Array
      .from(values)
      .map((video) => {
        const id = video[0];
        const data = video[1];
        return {
          id,
          ...data,
        }
      })
      .filter(video => {
        if (search) {
          return video.title.includes(search);
        }
        return true;
      });
  }


  create(video) {
    const id = randomUUID();
    this.#videos.set(id, video);
  }


  update(id, video) {
    this.#videos.set(id, video);
  }


  delete(id) {
    this.#videos.delete(id);
  }
}