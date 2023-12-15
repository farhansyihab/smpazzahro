<template>
    <div class="container" style="padding-top: 20px;">
        <div class="mb-3">
            <label for="judulBerita"><strong>Judul</strong> : &nbsp;&nbsp;</label>
            <input id="judulBerita" type="text" placeholder="masukkan judul disini" v-model="judulBlog"/>
        </div>

        <ckeditor 
            :editor="editor" 
            v-model="editorData" 
            :config="editorConfig">
        </ckeditor>
        <button class="btn btn-primary" @click="simpanData()">Simpan</button>
    </div>
</template>

<script>
    import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
	import {
		Image,
		ImageCaption,
		ImageStyle,
		ImageToolbar,
		ImageUpload
	} from '@ckeditor/ckeditor5-image';
    import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
    import { Essentials } from '@ckeditor/ckeditor5-essentials';
    import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
    import { Link } from '@ckeditor/ckeditor5-link';
	import { List } from '@ckeditor/ckeditor5-list';
    import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
	import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload';
	import { Alignment } from '@ckeditor/ckeditor5-alignment';
    import { beritaData } from "../../store/blog/index.js"

    export default {
        name: 'FrmInputBlog',
        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                judulBlog: '',
                editorConfig: {
                    plugins: [
                        Essentials,
                        Bold,
                        Italic,
                        Link,
                        Paragraph,
						Base64UploadAdapter,
						Image,
						ImageCaption,
						ImageStyle,
						ImageToolbar,
						ImageUpload,
						Alignment,
						List,
                        SourceEditing						
                    ],

                    toolbar: {
                        items: [
							'alignment',
							'|',							
                            'bold',
                            'italic',
                            'link',
                            'paragraph',
							'bulletedList',
							'numberedList',
							'|',
							'imageUpload',
                            'imageStyle',
							'|',
                            'sourceEditing',
                            'undo',
                            'redo'
                        ]
                    },
                    language: 'id',
                    image: {
                        toolbar: [
                            'imageTextAlternative',
                            'toggleImageCaption',
                            'imageStyle:inline',
                            'imageStyle:block',
                            'imageStyle:side'
                        ]
                    },
                    table: {
                        contentToolbar: [
                            'tableColumn',
                            'tableRow',
                            'mergeTableCells'
                        ]
                    }                    
                }
            };
        },
        methods:{
            simpanData(){
                beritaData().inputBlog(this.judulBlog, this.editorData)
            }
        }
    };
</script>
<style>
.ck.ck-button, a.ck.ck-button{
    width: 40px !important;
}
.ck .ck-sticky-panel{
    border: blue;
    border-style: solid;
}
/* --------- EDITOR STYLES  ---------------------------------------------------------------------------------------- */

.editor__editable,
/* Classic build. */
main .ck-editor[role='application'] .ck.ck-content,
/* Decoupled document build. */
.ck.editor__editable[role='textbox'],
.ck.ck-editor__editable[role='textbox'],
/* Inline & Balloon build. */
.ck.editor[role='textbox'] {
	width: 100%;
    height: auto;
	background: #fff;
	font-size: 1em;
	line-height: 1.6em;
	min-height: var(--ck-sample-editor-min-height);
	padding: 1.5em 2em;
}

.ck.ck-editor__editable {
	background: #fff;
	border: 1px solid hsl(0, 0%, 70%);
	width: 100%;
    height: auto;
}

/* Because of sidebar `position: relative`, Edge is overriding the outline of a focused editor. */
.ck.ck-editor__editable {
	position: relative;
	z-index: var(--ck-sample-editor-z-index);
}

.editor-container {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	position: relative;
	width: 100%;
	justify-content: center;
}

.editor-container--with-sidebar > .ck.ck-editor {
	width: calc( 100% - var(--ck-sample-sidebar-width) );
}
/* .ck-blurred .ck .ck-content .ck-editor__editable .ck-rounded-corners .ck-editor__editable_inline{
    height: 800px;
} */
</style>