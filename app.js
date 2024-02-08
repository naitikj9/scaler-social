console.log("connected");

document.addEventListener('DOMContentLoaded', function () {
    let post_btn = document.querySelector("#post-btn");

    if (!post_btn) {
        console.error("Post button not found");
        return;
    }

    post_btn.addEventListener('click', (e) => {
        let posts_box = document.querySelector(".chat-posts");

        if (!posts_box) {
            console.error("Posts box not found");
            return;
        }

        let post_area = document.querySelector("#post-area-text");

        if (!post_area) {
            console.error("Textarea not found");
            return;
        }

        let postText = post_area.value.trim();

        if (postText !== "") {
            let main_post = document.createElement('div');
            main_post.innerHTML = `<div class="main-post">
                <div class="post-main">
                    <div class="prof-img">
                    </div>
                    <div class="post-right">    
                        <div class="post-det">
                            <div class="post-right-btns">
                                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="#">
                                <h4>Naitikjain @naitikj._</h4>
                            </div>
                        </div>
                        
                        <div class="post-txt-area">
                            <textarea name="post" id="post-area-text" cols="30" rows="10" disabled="disabled">${postText}</textarea>
                        </div>
                        
                        <div class="like-cmnt-btns">
                            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="#">
                            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="#">
                        </div>
                    </div>
                </div>
            </div>`;

            posts_box.appendChild(main_post);
        } else {
            console.error("Textarea value is empty");
        }
    });
});
