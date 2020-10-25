module.exports = function toReadable(number) {

    const arr = number.toString().split('').reverse();

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (i === 0) {            

            if (arr[i] === '0' && arr.length === 1) {

                return 'zero';               

            }

            switch (arr[i]) {

                case '1':

                    result.unshift('one');

                    break;
                    

                case '2':

                    result.unshift('two');

                    break;

                case '3':

                    result.unshift('three');

                    break;

                case '4':

                    result.unshift('four');

                    break;

                case '5':

                    result.unshift('five');

                    break;

                case '6':

                    result.unshift('six');

                    break;

                case '7':

                    result.unshift('seven');

                    break;

                case '8':

                    result.unshift('eight');

                    break;

                case '9':

                    result.unshift('nine');

                    break;

            }

        }



        if (i === 1) {

            if (arr[i] === '1') {

                switch (arr[i - 1]) {

                    case '0':

                        result = ['ten'];

                        break;

                    case '1':

                        result = ['eleven'];

                        break;

                    case '2':

                        result = ['twelve'];

                        break;

                    case '3':

                        result = ['thirteen'];

                        break;

                    case '4':

                        result = ['fourteen'];

                        break;

                    case '5':

                        result = ['fifteen'];

                        break;

                    case '6':

                        result = ['sixteen'];

                        break;

                    case '7':

                        result = ['seventeen'];

                        break;

                    case '8':

                        result = ['eighteen'];

                        break;

                    case '9':

                        result = ['nineteen'];

                        break;

                }

            }

            switch (arr[i]) {                

                case '2':

                    result.unshift('twenty');

                    break;

                case '3':

                    result.unshift('thirty');

                    break;

                case '4':

                    result.unshift('forty');

                    break;

                case '5':

                    result.unshift('fifty');

                    break;

                case '6':

                    result.unshift('sixty');

                    break;

                case '7':

                    result.unshift('seventy');

                    break;

                case '8':

                    result.unshift('eighty');

                    break;

                case '9':

                    result.unshift('ninety');

                    break;

            }

        }



        if (i === 2) {

            switch (arr[i]) {

                case '1':

                    result.unshift('one hundred');

                    break;

                case '2':

                    result.unshift('two hundred');

                    break;

                case '3':

                    result.unshift('three hundred');

                    break;

                case '4':

                    result.unshift('four hundred');

                    break;

                case '5':

                    result.unshift('five hundred');

                    break;

                case '6':

                    result.unshift('six hundred');

                    break;

                case '7':

                    result.unshift('seven hundred');

                    break;

                case '8':

                    result.unshift('eight hundred');

                    break;

                case '9':

                    result.unshift('nine hundred');

                    break;

            }

        }

    }

    return result.join(' ');

}
