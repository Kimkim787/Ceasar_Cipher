$(document).ready(function () {
    const rn_encode = $("#rn-encode");
    const rn_decode = $("#rn-decode");
    const text_input = $("#inputted");
    const shift_count = $("#shift");
    const result = $("#result");
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    // Corrected change event
    text_input.on("input", function () {
        text_input.val(text_input.val().toUpperCase());
    });

    // Click events for encode and decode
    rn_encode.on("click", function () {
        original = $(text_input).val();
        shift = $(shift_count).val();
        let _encoded = encode(original, shift);

        $(result).text(_encoded);
    });

    rn_decode.on("click", function () {
        original = $(text_input).val();
        shift = $(shift_count).val();
        let _decoded = decode(original, shift);

        $(result).text(_decoded);
    });

    function encode(text, shift){
        console.log("Encode button clicked!");
        original = text;
        shift_n = parseInt(shift);
        encoded = "";

        //encoded = Array.from({ length: 26}, (c, i) => String.fromCharCode(65 + i + shift_n));
        for(i = 0; i < original.length; i++){
            let curr = original[i];
            let newChar = "";
            if (curr.match(/[A-Z]/)) {
                let charCode = curr.charCodeAt(0);
                newChar = ((charCode - 65 + shift_n) % 26) + 65;
            } else {
                encoded += curr; 
            }
            encoded += String.fromCharCode(newChar);
        }
        
        return encoded;

    }

    function decode(text, shift) {
        console.log("Decoding...");
        original = text;
        shift_n = parseInt(shift);
        decoded = "";

        //encoded = Array.from({ length: 26}, (c, i) => String.fromCharCode(65 + i + shift_n));
        for(i = 0; i < original.length; i++){
            let curr = original[i];
            let newChar = "";
            if (curr.match(/[A-Z]/)) {
                let charCode = curr.charCodeAt(0);
                newChar = ((charCode - 65 - shift_n + 26) % 26) + 65;
            } else {
                decoded += curr; 
            }
            decoded += String.fromCharCode(newChar);
        }
        
        return decoded;

    }
});
