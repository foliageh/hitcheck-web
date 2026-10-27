# HitCheck Web

Angular frontend for [HitCheck](https://github.com/foliageh/hitcheck): sign up, place points on an
interactive plot or enter coordinates by hand, and see right away whether each point hits the area.

<img src="https://github.com/foliageh/itmo-web-lab4/assets/46216950/7900419f-3e09-47db-b441-61c95821d755" alt="HitCheck screenshot" width="720">

**Stack:** Angular 17 (standalone components) · TypeScript · RxJS · PrimeNG · PrimeFlex · ESLint

- Login and registration with JWT, HTTP interceptors that attach the token and handle errors in one
  place, and a route guard for the main page.
- Interactive canvas plot: a click turns into coordinates, and the result is drawn on the plot.
- Responsive layout on PrimeFlex breakpoints, loading indicators, environment-based API URL.

Works with either backend: [hitcheck-api](https://github.com/foliageh/hitcheck-api) (Spring Boot) or
[hitcheck-api-jakarta](https://github.com/foliageh/hitcheck-api-jakarta) (Jakarta EE).

```bash
npm install
npm start        # http://localhost:4200
```

---
Built as coursework for the Web Programming course at ITMO University, 2023–2025.
