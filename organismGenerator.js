// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  // My factory function to make pAequor objects with inputs
  const pAequorFactory = (num, bases) => {
    return {
      specimenNum: num,
      dna: bases,
      mutate() {
        let i = Math.floor(Math.random() * this.dna.length);
        let oldBase = this.dna[i];
        let altBases = ["A", "T", "C", "G"];
        altBases.splice(altBases.indexOf(oldBase), 1);
        let mutatedBase = altBases[Math.floor(Math.random() * 3)];
        console.log(
          `Old base: ${oldBase}, location: ${i}, Alt bases: ${altBases}, Mutated Base: ${mutatedBase}`
        );
        return this.dna.splice(i, 1, mutatedBase);
      },
      //Comparing DNA
      compareDna(subject) {
        let similarities = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === subject.dna[i]) similarities++;
        }
        let percentage = (similarities / this.dna.length) * 100;
        console.log(
          `Specimen ${this.specimenNum} and specimen ${
            subject.specimenNum
          } have ${similarities} matching bases. They share ${percentage.toFixed()}% of their DNA`
        );
      },
  
      // calculate survival chance
      willLikelySurvive() {
        let survivalBases = 0
        for(let i=0; i< this.dna.length; i++){
          if(this.dna[i] === 'C' || this.dna[i] === 'G'){
            survivalBases++
          }
        }
        let survivalChance = survivalBases / this.dna.length * 100
        if (survivalChance.toFixed() >= 60){
          console.log(survivalChance)
          return true
        } else {
          return false
        }
      },
    };
  };
  let organismArray = [];
  let i = 0
  while (organismArray.length < 30) {
    let specimen = pAequorFactory(i, mockUpStrand())
    console.log(specimen)
    if(specimen.willLikelySurvive() == true){
      organismArray.push(specimen)
      i++
    }
  }
  console.log(organismArray)
  
  
  
  
  