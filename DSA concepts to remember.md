
Heap 
For reverse you can do negative reverse entry  also.
or
private PriorityQueue<Integer> small = new PriorityQueue<>(Collections.reverseOrder());

or 
Queue<ListNode> q = new PriorityQueue<ListNode>((a,b) -> a.val - b.val);


Collections 
Collections.reverse --> to reverse heap etc


Pair 
Creating pair
```java
class Pair{
    int key;
    int value;
    
    Pair(int key, int value){
        this.key = key;
        this.value = value;
    }
    
}
```

**Original Pair** java collection 

Pair<Integer, String> pair = new Pair<>(1, "One"); 
Integer key = pair.getKey(); 
String value = pair.getValue();


List 
add to add element

isEmpty() -> to check if its empty


Heap | priorityqueue with sorting
```csharp
    class Pair{
        int diff,val;
        public Pair(int diff,int val){
            this.diff=diff;
            this.val=val;
        }
    }
```


```csharp
PriorityQueue<Pair> pq=new PriorityQueue<>(new Comparator<Pair>(){
            public int compare(Pair p1,Pair p2){
                if(p2.diff==p1.diff) return p2.val-p1.val;
                return p2.diff-p1.diff;
            }
        });
```