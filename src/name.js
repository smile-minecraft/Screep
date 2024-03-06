module.exports = {
    generateName(functionality, model){
        const Names = [
        "Juno", "Venus", "Sophia", "Isabella", "Penelope",
        "Amelia", "Harper","Evelyn", "Abigail","Valentina",
        "Charlotte", "Elizabeth", "Avery","Sofina", "Grace",
        "Vesta", "Scarlett", "Chloe", "Christina", "Aurora",
        "Eleanor","Vivienne","Lorraine","Lorelei","Lilith",
        "Luna","Natalia","Beatrice","Adrianna","Madeline",
        "Cassandra","Hillary","Jessica", "Sophia", "Amanda",
        "Belinda", "Cynthia", "Dorothy", "Eleanor", "Felicia",
        ];

        if(Memory.nameQueue == undefined){
            Memory.nameQueue = 0;
        }

        const randomName = Names[Memory.nameQueue % Names.length];
        Memory.nameQueue = Memory.nameQueue + 1;
  
        const robotName = `${functionality}_${model}_${randomName}`;
    
        return robotName;
  
    }
};