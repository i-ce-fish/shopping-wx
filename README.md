## vant源码修改记录
1. 修改van-button line8，因为disabled设置后仍有点击效果
    before:
    ```html

        hover-class="van-button--active hover-class"
    ```
    after:
    ```html
          hover-class="{{ !disabled ? 'van-button--active hover-class' : 'noop' }} "
    ```
