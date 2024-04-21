---
inject: true
to: navigators/RootNavigator.tsx
after: import { createNativeStackNavigator } from "@react-navigation/native-stack";
---
import <%=  h.changeCase.pascalCase(name) %> from "../screens/<%=  h.changeCase.pascalCase(name) %>";
