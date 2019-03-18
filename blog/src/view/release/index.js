import React, { Component } from 'react';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
// 引入 Button
import { Button } from 'antd';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import { Prompt } from 'react-router-dom';
import './index.scss';

export default class Release extends Component {

    state = {
        // 创建一个空的editorState作为初始值
        editorState: BraftEditor.createEditorState(null),
        // 是否弹出离开提示，默认否
        isRelease: false
    }

    async componentDidMount () {
        // 假设此处从服务端获取html格式的编辑器内容
        const htmlContent = "<p>ctrl+s或点击发布按钮</p>"
        // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
        this.setState({
            editorState: BraftEditor.createEditorState(htmlContent)
        })
    }
    // 发布
    submitContent = async () => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML();
        // 已点击发布，设置为false，再点击离开，则不需要弹出提示
        this.setState({isRelease: false});
        console.log(htmlContent);
        // const result = await saveEditorContent(htmlContent)
    }
    // 内容改变，执行此方法
    handleEditorChange = (editorState) => {
        // 当编辑了博客，则设置为true，表示需要弹出离开提示
        this.setState({isRelease: true});
        this.setState({ editorState: editorState })
    }

    render () {

        const { editorState, isRelease } = this.state
        return (
            <div className="release-article bgwh rel">
                <Prompt when={isRelease} message="还未保存发布，你确定要离开吗？" />
                <BraftEditor
                    value={editorState}
                    onChange={this.handleEditorChange}
                    onSave={this.submitContent}
                />
                <Button className="release-article__btn" type="primary" onClick={this.submitContent.bind(this)}>发布</Button>
            </div>
        )

    }

}
