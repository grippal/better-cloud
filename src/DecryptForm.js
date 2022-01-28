import { LockClosedIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

const DecryptForm = () => {
    const [cipher, setCipher] = useState('');

    return (
      <div className="flex flex-col justify-center items-center font-Inter ">
        <div className="relative flex w-full flex-wrap items-stretch mb-8 w-5/12">
            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-2 py-4">
                <LockClosedIcon className="h-7 w-7 text-gray-300"/>
            </span>
            <input type="text" placeholder="Paste encrypted message here!" onChange={event => setCipher(event.target.value)} className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border-4 rounded-md shadow outline-none focus:outline-none focus:ring w-full pl-10"/>
        </div>
        <button className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-base px-8 py-3 rounded-md shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => decrypt(cipher)}>
            Decrypt
        </button> 
        <div className="flex flex-col justify-center my-16">
            <p className="font-Inter text-2xl my-10">Something unique about me is...</p>
            <p className="output font-Inter font-medium text-3xl"></p>
        </div>
      </div>
    );
} 

function decrypt(input) {
    var shift = 7;

    var output = "";
    for (var i = 0; i < input.length; i++) {
        var c = input[i];

        // If it's a letter...
    if (c.match(/[a-z]/i)) {
        // Get its code
        var code = input.charCodeAt(i);
  
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
  
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
  
      // Append
      output += c;
    }

    var outputElement = document.querySelector(".output");
    outputElement.innerHTML = output;
}
  
export default DecryptForm;