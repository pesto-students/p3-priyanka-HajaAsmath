const fs = require('fs')

function BinaryHeap(){
    let list = [];
    
    this.insert = (num) => {
      const size = list.length;
      
      if(size === 0){
        list.push(num);
      }else{
        list.push(num);
        
    
        for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
           this.minHeapify(list, list.length, i); 
        }
      }
    }
    
    
    this.delete = (num) => {
      const size = list.length;
      
      
      let i;
      for(i = 0; i < size; i++){
        if(list[i] === num){
          break;
        }
      }
      
      
      [list[i], list[size - 1]] = [list[size - 1], list[i]];
  
      
      list.splice(size - 1);
      
      
      for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
           this.minHeapify(list, list.length, i); 
       }
    }
    
    this.findMin = () => list[0];
    
    
    this.deleteMin = () => {
      this.delete(list[0]);
    }
    
    this.size = () => list.length;

  }

  function Car(regNo, colour) {
      this.regNo = regNo;
      this.colour = colour;
  }


let minHeap = new BinaryHeap()
const data = fs.readFileSync('input.txt', 'utf-8')
let queries = data.split('\n')
let slots;
let number = 0;
let numberOfSlots;

while (number < queries.length) {
    let query = queries[number];
    
    console.log(query);

    const firstString = query.split(' ')[0];
    switch(firstString) {
        case 'create_parking_lot':
            let numq = query.split(' ')
            numberOfSlots = numq[numq.length - 1];
            console.log(`Created a parking lot with ${numberOfSlots} slots`)
            slots = new Array(parseInt(numberOfSlots)).fill(null);
            break;
        case 'park':
            let vehinfo = query.split(' ');
            if(minHeap.size() === 0) {
                let flag = true;
                for(let i = 0;i<numberOfSlots;i++) {
                    if(slots[i] === null) {
                        slots[i] = new Car(vehinfo[1], vehinfo[2]);
                        flag = false;
                        break;
                    }
                    
                }
                if(flag) console.log('No Empty slot');
            } else {
                slots[minHeap.findMin()] = new Car(vehinfo[0], vehinfo[1]);
                minHeap.deleteMin();
            }
            break;
        case 'leave':
            let num = query.split(' ')
            let n = num[num.length - 1];
            console.log('N:'+n);
            slots[n] = null;
            minHeap.insert(n);
            break;
        case 'status':
            for(let i = 0;i<slots.length;i++){
                if(slots[i]) {
                    console.log(`${i} ${slots[i].regNo} ${slots[i].colour}`);
                }
            }
            break;
        case 'registration_numbers_for_cars_with_colour':
            let colour = query.split(' ');
            let str = '';
            for(let i = 0;i<slots.length;i++) {
                if(slots[i].colour === colour[1]) {
                    str = str +slots[i].regNo+',';
                }
            }
            if (str) {
                console.log(str);
            } else {
                console.log('No vehicle found with colour '+ colour[1]);
            }
            break;
        case 'slot_numbers_for_cars_with_colour':
            let colour1 = query.split(' ');
            let str1 = '';
            for(let i = 0;i<slots.length;i++) {
                if(slots[i].colour === colour1[1]) {
                    str1 = str1 + i + ',';
                }
            }
            if (str1) {
                console.log(str1);
            } else {
                console.log('No vehicle found with colour '+ colour1[1]);
            }
            break;
        case 'slot_number_for_registration_number':
            let regNo = query.split(' ');
            let flag = true;
            for(let i = 0;i<slots.length;i++) {
                if(slots[i].regNo === regNo[1]) {
                    console.log(i);
                    flag = false;
                    break;
                }
            }
            if(flag) console.log('No vehicle found with colour '+ regNo[1]);
            break;
        default:
            console.log('Unidentified Input');
    }
    number++;

}
