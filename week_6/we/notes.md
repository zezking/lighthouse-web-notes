NOTES

## throttle and debounced

 - ### throttle
   - To throttle a function means to ensure that the function is called at most once in a specified time period (for instance, once every 10 seconds). This means throttling will prevent a function from running if it has run “recently”. Throttling also ensures a function is run regularly at a fixed rate.
   - example
        - In action games, the user often performs a key action by pushing a button (example: shooting, punching). But, as any gamer knows, users often press the buttons much more than is necessary, probably due to the excitement and intensity of the action. So the user might hit “Punch” 10 times in 5 seconds, but the game character can only throw one punch in one second. In such a situation, it makes sense to throttle the action. In this case, throttling the “Punch” action to one second would ignore the second button press each second.
- ### debounce
  - Conversely, a debounced function will ignore all calls to it until the calls have stopped for a specified time period. Only then will it call the original function. For instance, if we specify the time as two seconds, and the debounced function is called 10 times with an interval of one second between each call, the function will not call the original function until two seconds after the last (tenth) call.
    - Autocomplete
       Often times, search boxes offer dropdowns that provide autocomplete options for the user’s current input. Sometimes the items suggested are fetched from the backend via API (for instance, on Google Maps).

      Google Maps with debounced autocomplete
        Supposing you’re searching for “Greenwich” and the autocomplete API gets called when the text in the search box changes. Without debounce, an API call would be made for every letter you type, even if you’re typing very fast.
        This approach has two major problems:
        If the user is a fast typist and types “Green” at a go, the autocomplete box would contain the results for “G”, before switching to those for “Gr”, then “Gre”, and so on. This would be a source of confusion to the user.
        API calls aren’t guaranteed to return in the order they were sent. This means the autocomplete request for “Gre” could return after the call for “Green”. This means the user would first see the up-to-date list (items starting with “Green”), which would then be replaced by the out-of-date one (items starting with “Gre”).
        So it makes sense to debounce the search here. Debouncing by one second will ensure that the autocomplete function does nothing until one second after the user is done typing.