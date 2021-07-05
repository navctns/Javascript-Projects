
class Election {

  constructor(p1,p2,p3,p4,totalVoters,votesDone){
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;
    this.totalVoters = totalVoters;
    this.votesDone = votesDone;
  }

  setRepoll(){
    localStorage.setItem('electOne', JSON.stringify([0,0,0,0,10,0]));
  }

  getResult(){

    const resultVotes = [{id:'p1',votes:this.p1},{id:'p2',votes:this.p2},{id:'p3',votes:this.p3},{id:'p4',votes:this.p4}];
    // let maxObj = objects.reduce((max, obj) => (max.votes > obj.votes) ? max : obj);
    let maxObj = resultVotes.reduce((max, obj) => (max.votes > obj.votes) ? max : obj);
    console.log(maxObj);


    const results = {
        p1:this.p1,
        p2:this.p2,
        p3:this.p3,
        p4:this.p4
      };
    let resultsArr  = [results.p1,results.p2,results.p3,results.p4];
    console.log(Math.max(...resultsArr));
    return maxObj;
  }
}
