function integerReplacement(num){
			if(num==1){
				return 0;
			}
			else if(num%2==0){
				return 1+integerReplacement(num/2);
			}
			else if(num%2==1){
				return 1+integerReplacement(num+1);
			}

		}
		console.log(integerReplacement(8));
		console.log(integerReplacement(7));
		console.log(integerReplacement(4));
