function jadenStr(str) {
    return str
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substr(1))
        .join(' ');
}

console.log(jadenStr("How can mirrors be real if our eyes aren't real"));
