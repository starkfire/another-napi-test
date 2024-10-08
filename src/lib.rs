#![deny(clippy::all)]

use napi_derive::napi;

// just a comment

#[napi]
pub fn sum(a: i32, b: i32) -> i32 {
    a + b
}

#[napi]
pub fn difference(a: i32, b: i32) -> i32 {
    a - b
}

#[napi]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        1 | 2 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}
