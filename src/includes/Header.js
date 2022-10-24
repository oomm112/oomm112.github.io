import React from 'react';
import styles from './Includes.module.css';

const Header = () => {
    const profile_img = 'https://vaibhavvikas.ml/jekyll-theme-minimalistic/logo.jpg';

    //blogname
    const blog_name = 'Minhyuk\'s TechBlog';

    //dummy 데이터
    const dummys = [
        {
           id: 1,  //자동생성 idx
            title: 'Web',
            depth: 1,   //깊이 1 ~ 3
        },
        {
            id: 2,
            title: 'Java',
            depth: 2,
            parent: 1 //부모 id
        },
        {
            id: 3,
            title: 'SpringBoot',
            depth: 3,
            parent: 2
        },
        {
            id: 4,
            title: 'React',
            depth: 2,
            parent: 1 //부모 id
        },
        {
            id: 5,
            title: 'ReactNative',
            depth: 2,
            parent: 1
        }
    ];

    //내림차순 정렬 한글
    const dummy = dummys.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0));
    console.log(dummy);

    return(
        <div className={styles.header}>
            <div className={styles.header_body}>
                <div className={styles.profile}>
                    <img src={profile_img} className={styles.profile_img}/>
                    <div className={styles.blog_name_div}>
                        <a className={styles.blog_name}>{blog_name}</a>
                    </div>
                </div>    
                <div className={styles.header_list}>
                    <h3 className={styles.list_head}>분류</h3>    
                    {dummy.map((item, index) => {
                        if(item.parent === undefined || item.parent === null){
                            const classB = dummy.filter((b) => item.id === b.parent && b.depth === 2);
                            return(
                                <ol>
                                    <li>{item.title}</li>
                                    {classB !== null && classB !== undefined && classB.map((itemB, index) => {
                                        const classC = dummy.filter((c) => itemB.id === c.parent && c.depth === 3);
                                            return(
                                                <ol>
                                                    <li>{itemB.title}</li>
                                                    {classC !== null && classC !== undefined && classC.map((itemC, index) => {
                                                        return(
                                                            <ol>
                                                                <li>{itemC.title}</li>
                                                            </ol>
                                                        )
                                                    })}
                                                </ol>
                                            )
                                        }
                                    )}
                                </ol>
                            )
                        }
                    })}
                </div>
                <div>
                    <img/>
                    <a>설정</a>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Header);