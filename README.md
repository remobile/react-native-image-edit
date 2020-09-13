# React Native ImageEdit (remobile)
A image edit for react-native support for ios and android

## Installation
```sh
npm install @remobile/react-native-image-edit --save
```

### Installation (iOS)
* Drag RCTImageEdit.xcodeproj to your project on Xcode.
* Click on your main project file (the one that represents the .xcodeproj) select Build Phases and drag libRCTImageEdit.a from the Products folder inside the RCTImageEdit.xcodeproj.
* Look for Header Search Paths and make sure it contains both $(SRCROOT)/../../../react-native/React as recursive.

### Installation (Android)
```gradle
...
include ':react-native-image-edit'
project(':react-native-image-edit').projectDir = new File(settingsDir, '../node_modules/@remobile/react-native-image-edit/android')
```

* In `android/app/build.gradle`

```gradle
...
dependencies {
    ...
    compile project(':react-native-image-edit')
}
```

* register module (in MainApplication.java)

```java
......
import com.remobile.imageedit.RCTImageEditPackage;  // <--- import

......

@Override
protected List<ReactPackage> getPackages() {
   ......
   new RCTImageEditPackage(),            // <------ add here
   ......
}

```

## Usage

### Example
```js
const ImageEdit = require('@remobile/react-native-image-edit');
......
async doRotate (isLeft) {
    const uri = this.state.image.uri;
    const image = await ImageEdit.edit(uri, [ { rotate: isLeft ? -90 : 90 } ]);
    this.setState({ image: null }, () => {
        this.setState({ image });
    });
},
async doFlip (isVertical) {
    const uri = this.state.image.uri;
    const image = await ImageEdit.edit(uri, [ { flip: isVertical ? { vertical: true } : { horizontal: true } } ]);
    this.setState({ image: null }, () => {
        this.setState({ image });
    });
},

```

### see detail use
* https://github.com/remobile/react-native-template
