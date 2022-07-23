# dev-progress
fivem dev-progress


# screenshot

![alt text](https://github.com/omar-othmann/dev-progress/blob/main/loading-1.PNG)
![alt text](https://github.com/omar-othmann/dev-progress/blob/main/loading-2.PNG)
![alt text](https://github.com/omar-othmann/dev-progress/blob/main/loading-3.PNG)
![alt text](https://github.com/omar-othmann/dev-progress/blob/main/loading-4.PNG)


# usage

client side<br><br>

to show progress, call Show(msg, time[default=5000] 5 sec, callback[optional]) > boolean

```lua

local success = exports['dev-progress']:Show('Loading...', 10000)
if not success then
  -- you already doing something.
end

local success = exports['dev-progress']:Show('Loading ...', 10000, function()
                  -- progress time finish do something.
                end)

if not success then
  -- you already doing something.
end
```

to hide, call Hide()

```lua
exports['dev-progress']:Hide()
```
