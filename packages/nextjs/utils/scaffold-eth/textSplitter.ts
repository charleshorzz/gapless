export const splitTextIntoChunks = (text: string, chunkSize = 1200) => {
  const chunks = [];
  let index = 0;

  while (index < text.length) {
    chunks.push(text.slice(index, index + chunkSize));
    index += chunkSize;
  }

  return chunks;
};
