---
inject: true
to: navigators/RootNavigator.tsx
before: </Stack.Navigator>
---
        <Stack.Screen name="<%=  h.changeCase.pascalCase(name) %>" component={<%=  h.changeCase.pascalCase(name) %>} />
