 const doc=require("../../doc.json")
 const getDocs = async(req,res) =>{

    res.send(doc)
  }
  function rankedScore(arr){
    
    let ranked2=arr.sort((a,b)=>b-a)
    let scoreRanks=[]
    for(var i=0;i<ranked2.length;i++){
       scoreRanks[i]=1
    }

     for(var i=0;i<ranked2.length-1;i++){
         if(ranked2[i]==ranked2[i+1]){
           scoreRanks[i+1]=scoreRanks[i]

         }else
         {
             scoreRanks[i+1]=scoreRanks[i]+1

         }
     }        

           
         return scoreRanks

       
    }


  const climbingLeaderboard = async(req,res) =>{
    const {input} = req.body
    const {player,ranked}=input;
        const scoreRanks = rankedScore(eval(ranked));
        const finalScore = [];
    
        for (let i = 0; i < eval(player).length; i++) {
            let j = 0;
            if (eval(player)[i] >= eval(ranked)[0]) {
                finalScore.push(1);
                continue;
            }
            if (eval(player)[i] < eval(ranked)[eval(ranked).length - 1]) {
                finalScore.push(scoreRanks[scoreRanks.length - 1] + 1);
                continue;
            }
            while (j < eval(ranked).length) {
                if (eval(player)[i] >= eval(ranked)[j]) {
                    finalScore.push(scoreRanks[j]);
                    break;
                }
                j++;
            }
        }
    
        res.send( {output:finalScore})
    }
  module.exports={getDocs,climbingLeaderboard}