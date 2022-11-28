import { compile, makeValidator } from "@harmoniclabs/plu-ts";
import { PlutusScriptVersion, scriptToJsonFormat } from "@harmoniclabs/plu-ts/dist/onchain/pluts/Script/compile.js";
import contract from "./contract";

const untypedValidator = makeValidator( contract );

const compiled = compile( untypedValidator );

const jsonFormat = scriptToJsonFormat(
    compiled,
    PlutusScriptVersion.V2
);

console.log("validator compield succesfully!");
console.log(
    JSON.stringify(
        jsonFormat,
        undefined,
        2
    )
);