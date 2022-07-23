local IsShowing = false
local CanCallback = nil

function Show(msg, time, callback)
    if IsShowing then return false end
    CanCallback = callback
    time = time or 5000
    time = math.floor(time)
    SendNUIMessage({
        ui = 'show',
        text = msg,
        time = time
    })
    IsShowing = true
    return true
end

function Hide()
    SendNUIMessage({
        ui = 'close'
    })
end

exports('Show', Show)
exports('Hide', Hide)


RegisterNUICallback('OnFinish', function()
    IsShowing = false
    if CanCallback then
        CanCallback()
        CanCallback = nil
    end
end)


RegisterCommand('test', function(source, args)
    if args[1] then
        local success = Show(args[1], args[2], function()
            print('Successfully finish.')
        end)
    end
end)
