# Sorting

S: As datasets get larger sorting, become alot more expensive, so custom sorting algs become neccessary 
         

Q: what is sorting? :      
A:  
      
Q: What is Bubble Sort? :      
A:  
        
Q: What is Insertion Sort :    
A:  
      
         
Q:  what is Merge Sort?  :     
A:     
      
Q:   :      
A:    
         
Q: What is O(n log n) as seen with Merge sort : 
A:     
        
Q: what is a stable vs unstable algorithm :   
A:  
      A sorting algorithm is said to be stable if two objects with equal keys appear in the same order in sorted output as they appear in the input array to be sorted. Some sorting algorithms are stable by nature like Insertion sort, Merge Sort, Bubble Sort, etc. And some sorting algorithms are not, like Heap Sort, Quick Sort, etc.

     Background: a "stable" sorting algorithm keeps the items with the same sorting key in order. Suppose we have a list of 5-letter words:

    peach   
    straw    
    apple    
    spork   
    If we sort the list by just the first letter of each word then a stable-sort would produce:   
            
    apple      
    peach        
    straw       
    spork          
    In an unstable sort algorithm, straw or spork may be      interchanged, but in a stable one, they stay in the same relative positions (that is, since straw appears before spork in the input, it also appears before spork in the output).
                              
    We could sort the list of words using this algorithm: stable sorting by column 5, then 4, then 3, then 2, then 1. In the end, it will be correctly sorted. Convince yourself of that. (by the way, that algorithm is called radix sort)       
                     
    Now to answer your question, suppose we have a list of first and last names. We are asked to sort "by last name, then by first". We could first sort (stable or unstable) by the first name, then stable sort by the last name. After these sorts, the list is primarily sorted by the last name. However, where last names are the same, the first names are sorted.         
                 
    You can't stack unstable sorts in the same fashion.           
                  
   ::::::::::::::::::: selection sorting :::::::::::::::::::::::      


Q: What is the goal of selection sorting?  :     
          
A:     Initially, the sorted part is empty and the unsorted part is the entire list.  
       it is an in-place comparison-based algorithm     
       the sorted portion of the array will find itself at the right end as the sorting continues.

Q: how does the sorting take place? :      
          
A:  
      the smallest element is selected from the unsorted array.
      then:  swapped with the leftmost element
      the swapped element becomes a part of the sorted-left of the array.    
    
Q: How does the algorithm resolve? :     

A:    
    the process of sorting the unsorted to the sorted-left continues until there is no unsorted-right

Q: What is the time-complexity of a selection sort? :    
A: O(n^2)



::::::::::::::::::: insertion sorting :::::::::::::::::::::::   

Q: what is insertion sort use case?  :  
A: useful for presorted or roughly-sorted list, or small data-sets  


Q: what is the time-complexity?  :  
A:  best case O(n) - worse case O(n^2)

Q: what determines the run-time?  :  
A: the size of data set + how arranged the arr is, if the second loop must kick-in then it become O(n^2)     


::::::::::::::::::: Merge sorting :::::::::::::::::::::::   


Q: what is the run time of Merge sort ? :       
A: potential time : O(n log n) worse case O(n)

Statement : Merge Sort uses the technique [ Divide and Conquer ]    

Q: what is Divide and conquer? :    
A:    
       This technique can be divided into the following three parts:      
          
       Divide: This involves dividing the problem into some sub problem.   
       Conquer: Sub problem by calling recursively until sub problem solved.   
       Combine: The Sub problem Solved so that we will get find problem solution.  

Q: What is merge sort? :     
A: The algorithm divides the array in two halves, recursively sorts them and finally merges the two sorted halves.          

