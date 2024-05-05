import { generationN } from "./evolution.mjs";
import { Reader } from "./reader.mjs"
import { Writer } from "./writer.mjs";

export const main = (filePath, steps) => {
    const pattern = Reader.readRLE(filePath);
    const newPattern = generationN(pattern, steps)
    console.log(newPattern)
    Writer.writeRLE(`${filePath.slice(0, filePath.length - 4)}_result`, newPattern);
}