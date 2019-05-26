export default function Convert (curFrom, val1, curTo,APIcurrs){
      for (let i=0; i< Object.keys(APIcurrs).length; i++){
        if (curFrom == Object.keys(APIcurrs)[i]){  
          console.log('First currency was found');
          val1 /= Object.values(APIcurrs)[i];
          break;
        }
      }
      for (let i=0; i< Object.keys(APIcurrs).length; i++){
        if (curTo == Object.keys(APIcurrs)[i]){  
          console.log('Second currency was found');
          val1 *= Object.values(APIcurrs)[i];
          break;
        }
      }
      return val1;
} 