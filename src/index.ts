import { compile, makeValidator, Script, ScriptType } from "@harmoniclabs/plu-ts";
import contract from "./contract";

const untypedValidator = makeValidator( contract );

const compiled = compile( untypedValidator );

const script = new Script(
    ScriptType.PlutusV2,
    compiled
);

console.log("validator compiled succesfully! 🎉\n");
console.log(
    JSON.stringify(
        script.toJson(),
        undefined,
        2
    )
);