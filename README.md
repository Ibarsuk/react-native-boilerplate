# React-Native-Boilerplate

State manadgment:

- Redux (toolkit)
- Redux-saga
- Redux-persist

Styles:

- Tachyouns like styles (@borjomeeee/rn-styles)

> <b>Note!</b> Also can use default react-native StyleSheet

Specific libs:

- react-navigation - navigation inside app
- react-native-reanimated - smooth animations
- react-native-svg
- react-native-splash-screen
- react-native-network-logger - logging http requests

## How to set environment?

Environment set by react-native-config lib. By default you can use 2 schemas - develop and production. Variables are setting in `.env` for develop, and `.env.prod` for production mode

## Folder structure

```
    src/
        - Components/ - common components for all app
            - Component1/
                - Views? - inherit components only to current component
                - Hooks? - hooks related only to current component
                - Store? - store related only to current component
                index.ts
            - Component2
            index.ts
        - Navigation/
            - Navigation1/
                - Screen1/
                    # Check Component1
                    - Views? - components only for current screen
                    - Hooks? - hooks related only for current screen
                    - Store? - store related only for current screen
                    index.ts
                - Screen2
                index.ts
                navigationOptions.ts
            - Navigation2/
                - Navigation3/
                    - Screen3
                index.ts
                navigationOptions.ts
            index.ts
        - Redux/
            - Middlewares/
                - Flow1
                - Flow2
                index.ts
            - Sagas/
                - Flow1
                - Flow2
                index.ts
            - Stores/
                - Store1/
                    reducer.ts
                    actions.ts
                    selectors.ts
                - Store2
            index.ts - createStore file
            persistConfig.ts
        - Services/
            - Service1/
                - Flow1
                - Flow2
                index.ts - init service
            - Service2
            index.ts
        - Lib/
            - Models - typesript data interfaces
            - Hooks - common hooks
            - Utils
            - Api/
                index.ts - Base ApiService class
            Const.ts
            Styles.ts - colors, configure styles
        .env
        .env.prod
        config.ts
        index.ts - enter file
```
