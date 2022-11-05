import { compile, makeValidator } from "@harmoniclabs/plu-ts";
import { PlutusScriptVersion, scriptToJsonFormat } from "@harmoniclabs/plu-ts/src/onchain/pluts/Script/compile";
import contract from "./contract";

const untypedValidator = makeValidator( contract );

const compiled = compile( untypedValidator );

const jsonFormat = scriptToJsonFormat(
    compiled,
    PlutusScriptVersion.V2
);

console.log("validator comipeld succesfully!!!");
console.log(
    JSON.stringify(
        jsonFormat,
        undefined,
        2
    )
);