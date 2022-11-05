import { int, pstruct } from "@harmoniclabs/plu-ts";

// modify the Datum as you prefer
const MyDatum = pstruct({
    Num: {
        number: int
    },
    NoDatum: {}
});

export default MyDatum;