# @zag-js/element-rect

## 0.34.0

## 0.33.2

## 0.33.1

## 0.33.0

## 0.32.1

## 0.32.0

## 0.31.1

## 0.31.0

## 0.30.0

## 0.29.0

## 0.28.1

## 0.28.0

## 0.27.1

## 0.27.0

## 0.26.0

## 0.25.0

## 0.24.0

## 0.23.0

## 0.22.0

## 0.21.0

## 0.20.0

### Patch Changes

- [`942db6ca`](https://github.com/chakra-ui/zag/commit/942db6caf9f699d6af56929c835b10ae80cfbc85) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Remove toggle machine

## 0.19.1

## 0.19.0

## 0.18.0

## 0.17.0

## 0.16.0

## 0.15.0

## 0.14.0

## 0.13.0

## 0.12.0

## 0.11.2

## 0.11.1

## 0.11.0

### Patch Changes

- [`4f371874`](https://github.com/chakra-ui/zag/commit/4f3718742dc88a2cd8726bdd889c9bbde94f5bce) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Rebuild all packages using tsup

## 0.10.5

## 0.10.4

## 0.10.3

### Patch Changes

- [`c59a8dec`](https://github.com/chakra-ui/zag/commit/c59a8dec15ab57d218823bfe7af6d723972be6c7) Thanks
  [@cschroeter](https://github.com/cschroeter)! - Use vite to build packages

## 0.10.2

## 0.10.1

## 0.10.0

## 0.9.2

## 0.9.1

### Patch Changes

- [`8469daa1`](https://github.com/chakra-ui/zag/commit/8469daa15fd7f2c0a80869a8715b0342bd3c355f) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Force release every package to fix regression

## 0.8.0

### Minor Changes

- [`bf136f6e`](https://github.com/chakra-ui/zag/commit/bf136f6ef8c9499bd0fbc4be057d02697e97a010) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Add support customizing the element rect calculation function

## 0.3.0

### Minor Changes

- [`fa2ecc8e`](https://github.com/chakra-ui/zag/commit/fa2ecc8ea235b824f45deda10070c321f896886c) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Add support for scoping the element rect tracking to size,
  position or rect.

  ```js
  import { trackElementRect } from "@zag-js/element-rect";

  trackElementRect(element, update, { scope: "size" }); // only track size
  trackElementRect(element, update, { scope: "position" }); // only track position
  trackElementRect(element, update, { scope: "rect" }); // track size and position (default)
  ```

## 0.2.2

### Patch Changes

- [`6957678d`](https://github.com/chakra-ui/zag/commit/6957678d2f00f4d219e791dffed91446e64211e7) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Switch to `es2020` to support `import.meta.env`

## 0.2.1

### Patch Changes

- [#462](https://github.com/chakra-ui/zag/pull/462)
  [`f8c47a2b`](https://github.com/chakra-ui/zag/commit/f8c47a2b4442bfadc4d98315a8c1ac4aa4020822) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Update packages to use explicit `exports` field in `package.json`

## 0.2.0

### Minor Changes

- [#375](https://github.com/chakra-ui/zag/pull/375)
  [`9cb4e9de`](https://github.com/chakra-ui/zag/commit/9cb4e9de28a3c6666860bc068c86be67a3b1a2ca) Thanks
  [@darrylblake](https://github.com/darrylblake)! - Ensures code is transpiled with `es2019` target for environments
  that don't support `es2020` and up, i.e. Cypress.

## 0.1.3

### Patch Changes

- [`52552156`](https://github.com/chakra-ui/zag/commit/52552156ded1b00f873576f52b11d0414f5dfee7) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Force new release

## 0.1.2

### Patch Changes

- [#325](https://github.com/chakra-ui/zag/pull/325)
  [`c0cc303e`](https://github.com/chakra-ui/zag/commit/c0cc303e9824ea395c06d9faa699d23e19ef6538) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Switch packages to use ESM and `type=module`

## 0.1.1

### Patch Changes

- [`55e6a55c`](https://github.com/chakra-ui/zag/commit/55e6a55c37a60eea5caa446270cd1f6012d7363d) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Bump all packages

## 0.1.0

### Minor Changes

- [`3f3de2b4`](https://github.com/chakra-ui/zag/commit/3f3de2b4e6619e99644d24e15df8016ee3e574a5) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Initial release
