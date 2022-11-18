import { bool, pBool, pfn, PScriptContext } from "@harmoniclabs/plu-ts";
import MyDatum from "./MyDatum";
import MyRedeemer from "./MyRedeemer";

const contract = pfn([
    MyDatum.type,
    MyRedeemer.type,
    PScriptContext.type
],  bool)
(( datum, redeemer, ctx ) =>
    // always suceeds
    pBool( true )
);

export default contract;