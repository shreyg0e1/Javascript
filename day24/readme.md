<!-- Event type -->
1: input
2: change
3: focus
<!-- focus: Does not bubble, so it needs to be directly attached to individual input elements.
focusin: Bubbles, so it can be attached to the form element for event delegation. -->
4: blur or focusout
5: click
<!-- 6: dbclick Explain later -->
7: submit
8: reset
9: FormData : API hai basically abhi object hai jisse huamara saaraa data form ka iske respective variable me store hoskta hai or humme itterator deta hai , jispe fir hum itterate kr skte hai ya array me convert krskte hai



http://127.0.0.1:5500/day24/index.html
http://127.0.0.1:5500/day24/index.html?Name=Shrey&LastName=Goel&Age=22

<!-- keys=value
Name=Shrey
LastName=Goel
Age=22 -->