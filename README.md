jAccordion
==========

A simple accordion plugin, with minimal and clean markup. With the correct behaviour of opening and closing between items as well as the ability to scroll to newly opened items.

### HTML Markup

The `.accordion` div is the wrapper and also what you initialise the plugin with. Then each item of the accordion is a `.jacc-item` which contains a `.jacc-heading` and a `.jacc-content`

Repeat `.jacc-item` per item and add the class `.selected` to the item/items you wish to be open by default.

```
<div class="accordion"> 
    <div class="jacc-item selected"> 
        <div class="jacc-heading">Heading</div> 
        <div class="jacc-content">Content</div>
    </div>
</div>
```

### JavaScript Initialisation

To initialise the plugin you use the normal method of accessing an element in jQuery and calling `.jAccordion()` on it. The plugin does consist of some customisable options which can also be passed in via an object as demonstrated below.

Without overriding the default options you will get the basic behaviour.

```
$('.accordion').jAccordion(); // Without custom options

$('.accordion').jAccordion({ // With custom options 
    scrollAfterSelection: false,
    scrollDuration: 750,
    slideUpDuration: 750,
    slideDownDuration: 750, 
});
```

### Plugin Options

The plugin comes with a few options that can be customised to produce the desired behaviour. These include control of scrolling as well as a couple of callbacks. A full list of each option and what they do can be found below:

#### activeItemClassName

`Default: 'selected'`

The class that gets used when an accordion item has been opened. `'selected'` by default. I would only change this if you are having a CSS class issue.

#### slideDownDuration

`Default: 500`

Speed in ms that the accordion item opens.

#### slideUpDuration

`Default: 500`

Speed in ms that the accordion item closes.

#### scrollDuration

`Default: 500`

Speed in ms that the accordion scrolls to the recently opened item.

#### extraScrollOffset

`Default: 0`

An option that can change the offset of the scroll when opening an item. By default it will scroll to the `offset().top` of the item.

#### scrollAfterSelection

`Default: true`

After an item has been selected and opened, there is a callback to scroll to the item to bring it to the top of the viewport.

#### onOpen

`Default: function(el) { }`

A callback that fires every time an item in the accordion has been opened. Argument is the element that has just been opened. You have access to `this` inside this function.

#### onClose

`Default: function(el) { }`

A callback that fires every time an item in the accordion has been closed. Argument is the element that has just been closed. You have access to `this` inside this function.
