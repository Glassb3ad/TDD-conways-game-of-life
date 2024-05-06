import { generationN } from "./evolution.mjs";
import { Reader } from "./reader.mjs"
import { Writer } from "./writer.mjs";

export const main = (filePath, steps) => {
    const pattern = Reader.readRLE(filePath);
    const newPattern = generationN(pattern, steps)
    Writer.writeRLE(`${filePath.slice(0, filePath.length - 4)}_result`, newPattern);
}

const filePath = process.argv[2]
const steps = Number.parseInt(process.argv[3])
if (!(filePath && steps)) return "Must give both file path and steps"
main(filePath, steps)