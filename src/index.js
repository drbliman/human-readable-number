module.exports = function toReadable (number) {
    let arr0 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr1 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen' ,'eighteen', 'nineteen'];
    let arr2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let n = String(number).split('');
    for (let i=0; i<n.length; i++) {
        n[i] = Number(n[i]);
    }
    if (n.length == 1) {
        for (let i=0; i<10; i++) {
            if(n[0] == i) {
                return arr0[i]
            }
        }
    }
    if (n.length == 2) {
        let a = '';
        if (n[0] == 1) {
            for (let i=0; i<10; i++){
                if(n[1] == i) {
                    return arr1[i]
                }
            }
        }
        if (n[0] > 1) {
            for (let i=0; i<10; i++) {
                if (n[0] == i) {
                    a += arr2[i]
                    for (let j=0; j<10; j++) {
                        if (n[1] == j && n[1] != 0) {
                            a += ' ' + arr0[j];
                        }
                    }
                }
            }
            return a;
        }
    }
    if (n.length == 3) {
        let b = '';
        for (let i=0; i<10; i++) {
            if (n[0] == i) {
                b += arr0[i] + ' hundred';
                for (let j=0; j<10; j++) {
                    if (n[1] == 1) {
                        b += ' ' + arr1[n[2]];
                        break;
                    }
                    if (n[1] == j && n[1] != 0) {
                        b += ' ' + arr2[j]
                    }
                }
                if (n[1] != 1) {
                    for (let r=0; r<10; r++) {
                        if (n[2] == r && n[2] != 0) {
                            b += ' ' + arr0[r]
                        }
                    }
                }
            }
        }
        return b;
    }
}