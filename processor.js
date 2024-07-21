function processor(transmission) {
    if (!transmission.includes("::")) {
        throw new Error('Data is invalid ; should contain "::"');
    }
    let parts = transmission.split("::");
    let rawData = parts[1];
    if(!rawData.endsWith('>') && !rawData.startsWith('<')){
        throw new Error('Data is invalid ; should start with "< and end with ">"');
    }
    else if(!rawData.startsWith('<')){
        throw new Error('Data is invalid ; should start with "<"');
    }
    else if(!rawData.endsWith('>')){
        throw new Error('Data is invalid ; should end with ">"');
    }

    if(isNaN(parts[0])){
        throw new Error('Data is invalid ; the id needs to be a number');
    }

    return {
        id: Number(parts[0]),
        rawData: rawData
    };
}

module.exports = processor;