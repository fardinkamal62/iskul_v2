const random = module.exports

random.text = () => {
    let r = (Math.random() + 1).toString(36).substr(2, 15);
    return r;
}
