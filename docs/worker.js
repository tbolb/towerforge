let wasm_bindgen = (function(exports) {
    let script_src;
    if (typeof document !== 'undefined' && document.currentScript !== null) {
        script_src = new URL(document.currentScript.src, location.href).toString();
    }

    class IntoUnderlyingByteSource {
        __destroy_into_raw() {
            const ptr = this.__wbg_ptr;
            this.__wbg_ptr = 0;
            IntoUnderlyingByteSourceFinalization.unregister(this);
            return ptr;
        }
        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_intounderlyingbytesource_free(ptr, 0);
        }
        /**
         * @returns {number}
         */
        get autoAllocateChunkSize() {
            const ret = wasm.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);
            return ret >>> 0;
        }
        cancel() {
            const ptr = this.__destroy_into_raw();
            wasm.intounderlyingbytesource_cancel(ptr);
        }
        /**
         * @param {ReadableByteStreamController} controller
         * @returns {Promise<any>}
         */
        pull(controller) {
            const ret = wasm.intounderlyingbytesource_pull(this.__wbg_ptr, addHeapObject(controller));
            return takeObject(ret);
        }
        /**
         * @param {ReadableByteStreamController} controller
         */
        start(controller) {
            wasm.intounderlyingbytesource_start(this.__wbg_ptr, addHeapObject(controller));
        }
        /**
         * @returns {ReadableStreamType}
         */
        get type() {
            const ret = wasm.intounderlyingbytesource_type(this.__wbg_ptr);
            return __wbindgen_enum_ReadableStreamType[ret];
        }
    }
    if (Symbol.dispose) IntoUnderlyingByteSource.prototype[Symbol.dispose] = IntoUnderlyingByteSource.prototype.free;
    exports.IntoUnderlyingByteSource = IntoUnderlyingByteSource;

    class IntoUnderlyingSink {
        __destroy_into_raw() {
            const ptr = this.__wbg_ptr;
            this.__wbg_ptr = 0;
            IntoUnderlyingSinkFinalization.unregister(this);
            return ptr;
        }
        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_intounderlyingsink_free(ptr, 0);
        }
        /**
         * @param {any} reason
         * @returns {Promise<any>}
         */
        abort(reason) {
            const ptr = this.__destroy_into_raw();
            const ret = wasm.intounderlyingsink_abort(ptr, addHeapObject(reason));
            return takeObject(ret);
        }
        /**
         * @returns {Promise<any>}
         */
        close() {
            const ptr = this.__destroy_into_raw();
            const ret = wasm.intounderlyingsink_close(ptr);
            return takeObject(ret);
        }
        /**
         * @param {any} chunk
         * @returns {Promise<any>}
         */
        write(chunk) {
            const ret = wasm.intounderlyingsink_write(this.__wbg_ptr, addHeapObject(chunk));
            return takeObject(ret);
        }
    }
    if (Symbol.dispose) IntoUnderlyingSink.prototype[Symbol.dispose] = IntoUnderlyingSink.prototype.free;
    exports.IntoUnderlyingSink = IntoUnderlyingSink;

    class IntoUnderlyingSource {
        __destroy_into_raw() {
            const ptr = this.__wbg_ptr;
            this.__wbg_ptr = 0;
            IntoUnderlyingSourceFinalization.unregister(this);
            return ptr;
        }
        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_intounderlyingsource_free(ptr, 0);
        }
        cancel() {
            const ptr = this.__destroy_into_raw();
            wasm.intounderlyingsource_cancel(ptr);
        }
        /**
         * @param {ReadableStreamDefaultController} controller
         * @returns {Promise<any>}
         */
        pull(controller) {
            const ret = wasm.intounderlyingsource_pull(this.__wbg_ptr, addHeapObject(controller));
            return takeObject(ret);
        }
    }
    if (Symbol.dispose) IntoUnderlyingSource.prototype[Symbol.dispose] = IntoUnderlyingSource.prototype.free;
    exports.IntoUnderlyingSource = IntoUnderlyingSource;
    function __wbg_get_imports() {
        const import0 = {
            __proto__: null,
            __wbg_Window_a2a6c4d665047b14: function(arg0) {
                const ret = getObject(arg0).Window;
                return addHeapObject(ret);
            },
            __wbg_WorkerGlobalScope_2664448a7c667d67: function(arg0) {
                const ret = getObject(arg0).WorkerGlobalScope;
                return addHeapObject(ret);
            },
            __wbg___wbindgen_debug_string_a57024b9c6e4a48b: function(arg0, arg1) {
                const ret = debugString(getObject(arg1));
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg___wbindgen_is_function_5e4570eb24ffa122: function(arg0) {
                const ret = typeof(getObject(arg0)) === 'function';
                return ret;
            },
            __wbg___wbindgen_is_null_7d13f41e1a2d5140: function(arg0) {
                const ret = getObject(arg0) === null;
                return ret;
            },
            __wbg___wbindgen_is_string_e6f02f0ea5f20a32: function(arg0) {
                const ret = typeof(getObject(arg0)) === 'string';
                return ret;
            },
            __wbg___wbindgen_is_undefined_6cff064c44e0d823: function(arg0) {
                const ret = getObject(arg0) === undefined;
                return ret;
            },
            __wbg___wbindgen_string_get_d154f1e671052120: function(arg0, arg1) {
                const obj = getObject(arg1);
                const ret = typeof(obj) === 'string' ? obj : undefined;
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg___wbindgen_throw_bb96b2010945f0bc: function(arg0, arg1) {
                throw new Error(getStringFromWasm0(arg0, arg1));
            },
            __wbg__wbg_cb_unref_be22cc64ae6946a0: function(arg0) {
                getObject(arg0)._wbg_cb_unref();
            },
            __wbg_arrayBuffer_16433f17fbd74397: function() { return handleError(function (arg0) {
                const ret = getObject(arg0).arrayBuffer();
                return addHeapObject(ret);
            }, arguments); },
            __wbg_beginComputePass_b9a325184985e6ff: function(arg0, arg1) {
                const ret = getObject(arg0).beginComputePass(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_buffer_78291c0e094ccf99: function(arg0) {
                const ret = getObject(arg0).buffer;
                return addHeapObject(ret);
            },
            __wbg_byobRequest_f8b1c89429b77545: function(arg0) {
                const ret = getObject(arg0).byobRequest;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            },
            __wbg_byteLength_336bc7d303511ba0: function(arg0) {
                const ret = getObject(arg0).byteLength;
                return ret;
            },
            __wbg_byteOffset_2b1d5b10453ce198: function(arg0) {
                const ret = getObject(arg0).byteOffset;
                return ret;
            },
            __wbg_call_35dba3c747ad7521: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
                return addHeapObject(ret);
            }, arguments); },
            __wbg_close_72f69f5f2de2bc73: function() { return handleError(function (arg0) {
                getObject(arg0).close();
            }, arguments); },
            __wbg_close_97cdb44c3a7878f6: function() { return handleError(function (arg0) {
                getObject(arg0).close();
            }, arguments); },
            __wbg_close_db3a1a44cbdaae0c: function(arg0) {
                getObject(arg0).close();
            },
            __wbg_configure_1e2c1c9edad07d26: function() { return handleError(function (arg0, arg1) {
                getObject(arg0).configure(getObject(arg1));
            }, arguments); },
            __wbg_copyBufferToBuffer_9c174b96fb08d551: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
                getObject(arg0).copyBufferToBuffer(getObject(arg1), arg2, getObject(arg3), arg4, arg5);
            }, arguments); },
            __wbg_createBindGroup_f539b26ca341308f: function(arg0, arg1) {
                const ret = getObject(arg0).createBindGroup(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_createBuffer_d800e9b1d41b2ee5: function() { return handleError(function (arg0, arg1) {
                const ret = getObject(arg0).createBuffer(getObject(arg1));
                return addHeapObject(ret);
            }, arguments); },
            __wbg_createCommandEncoder_3352d1ffc36c6fc0: function(arg0, arg1) {
                const ret = getObject(arg0).createCommandEncoder(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_createComputePipeline_224fa2618d9948a0: function(arg0, arg1) {
                const ret = getObject(arg0).createComputePipeline(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_createShaderModule_cefa51336cb288ae: function(arg0, arg1) {
                const ret = getObject(arg0).createShaderModule(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_data_57d8ce4eb5f0a433: function(arg0) {
                const ret = getObject(arg0).data;
                return addHeapObject(ret);
            },
            __wbg_dispatchWorkgroups_56b943172790add0: function(arg0, arg1, arg2, arg3) {
                getObject(arg0).dispatchWorkgroups(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0);
            },
            __wbg_end_82fd0c12ba185009: function(arg0) {
                getObject(arg0).end();
            },
            __wbg_enqueue_7d68a21eda78e72f: function() { return handleError(function (arg0, arg1) {
                getObject(arg0).enqueue(getObject(arg1));
            }, arguments); },
            __wbg_error_757e9472f8410341: function(arg0, arg1) {
                let deferred0_0;
                let deferred0_1;
                try {
                    deferred0_0 = arg0;
                    deferred0_1 = arg1;
                    console.error(getStringFromWasm0(arg0, arg1));
                } finally {
                    wasm.__wbindgen_export4(deferred0_0, deferred0_1, 1);
                }
            },
            __wbg_fetch_8d9b732df7467c44: function(arg0) {
                const ret = fetch(getObject(arg0));
                return addHeapObject(ret);
            },
            __wbg_finish_09ec094c10f41e7b: function(arg0) {
                const ret = getObject(arg0).finish();
                return addHeapObject(ret);
            },
            __wbg_finish_ec1c191f66a895b1: function(arg0, arg1) {
                const ret = getObject(arg0).finish(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_getBindGroupLayout_349f9101ad6d4d76: function(arg0, arg1) {
                const ret = getObject(arg0).getBindGroupLayout(arg1 >>> 0);
                return addHeapObject(ret);
            },
            __wbg_getContext_c5236e0057b35024: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            }, arguments); },
            __wbg_getDate_b0ac858991e80b2e: function(arg0) {
                const ret = getObject(arg0).getDate();
                return ret;
            },
            __wbg_getDay_d65e35285ba489ae: function(arg0) {
                const ret = getObject(arg0).getDay();
                return ret;
            },
            __wbg_getFullYear_d2ecaf3ecbfaddf9: function(arg0) {
                const ret = getObject(arg0).getFullYear();
                return ret;
            },
            __wbg_getHours_521ab343a38cb962: function(arg0) {
                const ret = getObject(arg0).getHours();
                return ret;
            },
            __wbg_getMappedRange_fb54c6327b2d8d20: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = getObject(arg0).getMappedRange(arg1, arg2);
                return addHeapObject(ret);
            }, arguments); },
            __wbg_getMinutes_27257e5640ea2e7c: function(arg0) {
                const ret = getObject(arg0).getMinutes();
                return ret;
            },
            __wbg_getMonth_9f2f20dab3150834: function(arg0) {
                const ret = getObject(arg0).getMonth();
                return ret;
            },
            __wbg_getRandomValues_896855b3a5f89999: function() { return handleError(function (arg0, arg1) {
                globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
            }, arguments); },
            __wbg_getSeconds_0071b90906b363f2: function(arg0) {
                const ret = getObject(arg0).getSeconds();
                return ret;
            },
            __wbg_getTime_63fb0332e6c4ec17: function(arg0) {
                const ret = getObject(arg0).getTime();
                return ret;
            },
            __wbg_getTimezoneOffset_4baa793e0d3962a8: function(arg0) {
                const ret = getObject(arg0).getTimezoneOffset();
                return ret;
            },
            __wbg_gpu_afdd4387c7afe5f9: function(arg0) {
                const ret = getObject(arg0).gpu;
                return addHeapObject(ret);
            },
            __wbg_instanceof_Error_61d8a02a0f3383a1: function(arg0) {
                let result;
                try {
                    result = getObject(arg0) instanceof Error;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_Response_8f49efbd4bfd76d6: function(arg0) {
                let result;
                try {
                    result = getObject(arg0) instanceof Response;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_label_7add8cb37a6ef98f: function(arg0, arg1) {
                const ret = getObject(arg1).label;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_length_36bd29c6848c2144: function(arg0) {
                const ret = getObject(arg0).length;
                return ret;
            },
            __wbg_mapAsync_b0597127f5037286: function(arg0, arg1, arg2, arg3) {
                const ret = getObject(arg0).mapAsync(arg1 >>> 0, arg2, arg3);
                return addHeapObject(ret);
            },
            __wbg_message_c141d5e68716b595: function(arg0) {
                const ret = getObject(arg0).message;
                return addHeapObject(ret);
            },
            __wbg_name_7adfb7f7f1539878: function(arg0) {
                const ret = getObject(arg0).name;
                return addHeapObject(ret);
            },
            __wbg_navigator_6cfdd5fa246d910f: function(arg0) {
                const ret = getObject(arg0).navigator;
                return addHeapObject(ret);
            },
            __wbg_navigator_e5c345298a9609cd: function(arg0) {
                const ret = getObject(arg0).navigator;
                return addHeapObject(ret);
            },
            __wbg_new_0_f117d868b403dc07: function() {
                const ret = new Date();
                return addHeapObject(ret);
            },
            __wbg_new_227d7c05414eb861: function() {
                const ret = new Error();
                return addHeapObject(ret);
            },
            __wbg_new_358857d90afd5a2d: function(arg0, arg1) {
                const ret = new Error(getStringFromWasm0(arg0, arg1));
                return addHeapObject(ret);
            },
            __wbg_new_652118cdee90118f: function() { return handleError(function (arg0, arg1) {
                const ret = new OffscreenCanvas(arg0 >>> 0, arg1 >>> 0);
                return addHeapObject(ret);
            }, arguments); },
            __wbg_new_77cc4f4f472aeb81: function(arg0) {
                const ret = new Uint8Array(getObject(arg0));
                return addHeapObject(ret);
            },
            __wbg_new_95039e162b0c4466: function() { return handleError(function () {
                const ret = new Headers();
                return addHeapObject(ret);
            }, arguments); },
            __wbg_new_b4f72b5144efe03b: function() { return handleError(function () {
                const ret = new URLSearchParams();
                return addHeapObject(ret);
            }, arguments); },
            __wbg_new_c4a5c3368506feb1: function() { return handleError(function (arg0, arg1) {
                const ret = new URL(getStringFromWasm0(arg0, arg1));
                return addHeapObject(ret);
            }, arguments); },
            __wbg_new_ebe3e0f6837f0879: function() {
                const ret = new Object();
                return addHeapObject(ret);
            },
            __wbg_new_f9d6489212f3b2b3: function(arg0) {
                const ret = new Date(getObject(arg0));
                return addHeapObject(ret);
            },
            __wbg_new_from_slice_3eea173078478cfe: function(arg0, arg1) {
                const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
                return addHeapObject(ret);
            },
            __wbg_new_typed_ad9b105a7be50737: function() {
                const ret = new Object();
                return addHeapObject(ret);
            },
            __wbg_new_typed_cceaf62d8d95e9f2: function(arg0, arg1) {
                try {
                    var state0 = {a: arg0, b: arg1};
                    var cb0 = (arg0, arg1) => {
                        const a = state0.a;
                        state0.a = 0;
                        try {
                            return __wasm_bindgen_func_elem_1277(a, state0.b, arg0, arg1);
                        } finally {
                            state0.a = a;
                        }
                    };
                    const ret = new Promise(cb0);
                    return addHeapObject(ret);
                } finally {
                    state0.a = 0;
                }
            },
            __wbg_new_with_byte_offset_and_length_ff6e927f8d72f0c3: function(arg0, arg1, arg2) {
                const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
                return addHeapObject(ret);
            },
            __wbg_new_with_str_4ebb1146a76a8593: function() { return handleError(function (arg0, arg1) {
                const ret = new Request(getStringFromWasm0(arg0, arg1));
                return addHeapObject(ret);
            }, arguments); },
            __wbg_new_with_str_and_init_5a37d576dec75a86: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
                return addHeapObject(ret);
            }, arguments); },
            __wbg_new_with_year_month_day_cc812ef210488bf4: function(arg0, arg1, arg2) {
                const ret = new Date(arg0 >>> 0, arg1, arg2);
                return addHeapObject(ret);
            },
            __wbg_onSubmittedWorkDone_1190213cee1ecf7e: function(arg0) {
                const ret = getObject(arg0).onSubmittedWorkDone();
                return addHeapObject(ret);
            },
            __wbg_postMessage_6dcc1574fef77104: function() { return handleError(function (arg0, arg1) {
                getObject(arg0).postMessage(getObject(arg1));
            }, arguments); },
            __wbg_prototypesetcall_de8e0d9553586985: function(arg0, arg1, arg2) {
                Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), getObject(arg2));
            },
            __wbg_queueMicrotask_ac694eae12e92dfb: function(arg0) {
                queueMicrotask(getObject(arg0));
            },
            __wbg_queueMicrotask_be5fe34a8f4cad4d: function(arg0) {
                const ret = getObject(arg0).queueMicrotask;
                return addHeapObject(ret);
            },
            __wbg_queue_7b62c28143d44293: function(arg0) {
                const ret = getObject(arg0).queue;
                return addHeapObject(ret);
            },
            __wbg_random_b0d98802be10ff20: function() {
                const ret = Math.random();
                return ret;
            },
            __wbg_requestAdapter_a539af006419f2e9: function(arg0, arg1) {
                const ret = getObject(arg0).requestAdapter(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_requestDevice_5cb8a582e55d08cb: function(arg0, arg1) {
                const ret = getObject(arg0).requestDevice(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_resolve_020f95d838c6ef25: function(arg0) {
                const ret = Promise.resolve(getObject(arg0));
                return addHeapObject(ret);
            },
            __wbg_respond_f88cbcebace42068: function() { return handleError(function (arg0, arg1) {
                getObject(arg0).respond(arg1 >>> 0);
            }, arguments); },
            __wbg_search_3ab40a92dceeaacb: function(arg0, arg1) {
                const ret = getObject(arg1).search;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_setBindGroup_c83391351ce68826: function(arg0, arg1, arg2) {
                getObject(arg0).setBindGroup(arg1 >>> 0, getObject(arg2));
            },
            __wbg_setPipeline_5146f7b8d2b4af5c: function(arg0, arg1) {
                getObject(arg0).setPipeline(getObject(arg1));
            },
            __wbg_set_8155bb79a948541b: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
                return ret;
            }, arguments); },
            __wbg_set_862c439a342a8818: function(arg0, arg1, arg2) {
                getObject(arg0).set(getObject(arg1), arg2 >>> 0);
            },
            __wbg_set_b9b5b5cb7b495037: function(arg0, arg1, arg2) {
                getObject(arg0).set(getArrayU8FromWasm0(arg1, arg2));
            },
            __wbg_set_beginning_of_pass_write_index_fa9ae10d5d2804ce: function(arg0, arg1) {
                getObject(arg0).beginningOfPassWriteIndex = arg1 >>> 0;
            },
            __wbg_set_binding_b6cee57f35ac5190: function(arg0, arg1) {
                getObject(arg0).binding = arg1 >>> 0;
            },
            __wbg_set_buffer_1548ae88a9188037: function(arg0, arg1) {
                getObject(arg0).buffer = getObject(arg1);
            },
            __wbg_set_code_5d5b0b9e2fd0dca7: function(arg0, arg1, arg2) {
                getObject(arg0).code = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_compute_bc754d9e37f6e4c9: function(arg0, arg1) {
                getObject(arg0).compute = getObject(arg1);
            },
            __wbg_set_device_210484a77b675c9c: function(arg0, arg1) {
                getObject(arg0).device = getObject(arg1);
            },
            __wbg_set_end_of_pass_write_index_b54a8e3802b9ae0d: function(arg0, arg1) {
                getObject(arg0).endOfPassWriteIndex = arg1 >>> 0;
            },
            __wbg_set_entries_f26b77ab9548e906: function(arg0, arg1, arg2) {
                getObject(arg0).entries = getArrayJsValueViewFromWasm0(arg1, arg2);
            },
            __wbg_set_entry_point_ac8db535971761fe: function(arg0, arg1, arg2) {
                getObject(arg0).entryPoint = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_format_f009e603f7d4c28e: function(arg0, arg1) {
                getObject(arg0).format = __wbindgen_enum_GpuTextureFormat[arg1];
            },
            __wbg_set_headers_805555608daf7f2a: function(arg0, arg1) {
                getObject(arg0).headers = getObject(arg1);
            },
            __wbg_set_label_09e2da5f8522dbe8: function(arg0, arg1, arg2) {
                getObject(arg0).label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_17b4858e1eef23dd: function(arg0, arg1, arg2) {
                getObject(arg0).label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_2fefb39c0e0dbbe8: function(arg0, arg1, arg2) {
                getObject(arg0).label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_70a09ee68d6b1b26: function(arg0, arg1, arg2) {
                getObject(arg0).label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_92cd3811e96b487c: function(arg0, arg1, arg2) {
                getObject(arg0).label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_c7987704d29f284b: function(arg0, arg1, arg2) {
                getObject(arg0).label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_cfe64bca8945ee30: function(arg0, arg1, arg2) {
                getObject(arg0).label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_ee172cd5f6a96961: function(arg0, arg1, arg2) {
                getObject(arg0).label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_layout_454e3a091b390cd4: function(arg0, arg1) {
                getObject(arg0).layout = getObject(arg1);
            },
            __wbg_set_layout_4b5d5b12fbb72a76: function(arg0, arg1) {
                getObject(arg0).layout = getObject(arg1);
            },
            __wbg_set_layout_gpu_auto_layout_mode_ee432e515c357fa8: function(arg0, arg1) {
                getObject(arg0).layout = __wbindgen_enum_GpuAutoLayoutMode[arg1];
            },
            __wbg_set_mapped_at_creation_3f320fef6761b02c: function(arg0, arg1) {
                getObject(arg0).mappedAtCreation = arg1 !== 0;
            },
            __wbg_set_method_cf2b992b9a610bc3: function(arg0, arg1, arg2) {
                getObject(arg0).method = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_module_c9946af218d23b53: function(arg0, arg1) {
                getObject(arg0).module = getObject(arg1);
            },
            __wbg_set_offset_f64_127e8a0aa5c5485a: function(arg0, arg1) {
                getObject(arg0).offset = arg1;
            },
            __wbg_set_onmessage_e3cf4ebd488be189: function(arg0, arg1) {
                getObject(arg0).onmessage = getObject(arg1);
            },
            __wbg_set_power_preference_b42d00a8facfbade: function(arg0, arg1) {
                getObject(arg0).powerPreference = __wbindgen_enum_GpuPowerPreference[arg1];
            },
            __wbg_set_query_set_f9a94586851fdba2: function(arg0, arg1) {
                getObject(arg0).querySet = getObject(arg1);
            },
            __wbg_set_required_features_bbab71414c45e621: function(arg0, arg1, arg2) {
                getObject(arg0).requiredFeatures = getArrayJsValueViewFromWasm0(arg1, arg2);
            },
            __wbg_set_required_limits_837f62d865e7cfac: function(arg0, arg1) {
                getObject(arg0).requiredLimits = getObject(arg1);
            },
            __wbg_set_resource_8fd8658b30d86ecf: function(arg0, arg1) {
                getObject(arg0).resource = getObject(arg1);
            },
            __wbg_set_resource_gpu_buffer_binding_33099b25da65b610: function(arg0, arg1) {
                getObject(arg0).resource = getObject(arg1);
            },
            __wbg_set_resource_gpu_texture_view_4cffe7bc7c8e5cbe: function(arg0, arg1) {
                getObject(arg0).resource = getObject(arg1);
            },
            __wbg_set_search_65c58ba6f17e037f: function(arg0, arg1, arg2) {
                getObject(arg0).search = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_size_f64_2f591b0654540477: function(arg0, arg1) {
                getObject(arg0).size = arg1;
            },
            __wbg_set_size_f64_e844c985b8f95261: function(arg0, arg1) {
                getObject(arg0).size = arg1;
            },
            __wbg_set_timestamp_writes_5f240bbaad97fcaf: function(arg0, arg1) {
                getObject(arg0).timestampWrites = getObject(arg1);
            },
            __wbg_set_usage_f3e34822998d2147: function(arg0, arg1) {
                getObject(arg0).usage = arg1 >>> 0;
            },
            __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
                const ret = getObject(arg1).stack;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_static_accessor_GLOBAL_THIS_466428f93b4eaa76: function() {
                const ret = typeof globalThis === 'undefined' ? null : globalThis;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            },
            __wbg_static_accessor_GLOBAL_c7aea38d4de089bc: function() {
                const ret = typeof global === 'undefined' ? null : global;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            },
            __wbg_static_accessor_SELF_42d4fae05e59267a: function() {
                const ret = typeof self === 'undefined' ? null : self;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            },
            __wbg_static_accessor_WINDOW_e0db14a0eba6a812: function() {
                const ret = typeof window === 'undefined' ? null : window;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            },
            __wbg_submit_077c85cc28e36892: function(arg0, arg1, arg2) {
                getObject(arg0).submit(getArrayJsValueViewFromWasm0(arg1, arg2));
            },
            __wbg_then_7026b513a94278a8: function(arg0, arg1) {
                const ret = getObject(arg0).then(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_then_72819b8d4e081fb5: function(arg0, arg1, arg2) {
                const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
                return addHeapObject(ret);
            },
            __wbg_toString_033acf19ce89359c: function(arg0) {
                const ret = getObject(arg0).toString();
                return addHeapObject(ret);
            },
            __wbg_toString_2f0b0aec069cb718: function(arg0) {
                const ret = getObject(arg0).toString();
                return addHeapObject(ret);
            },
            __wbg_unconfigure_835307f58dc68d80: function(arg0) {
                getObject(arg0).unconfigure();
            },
            __wbg_unmap_6a96b14c9ef5f7f5: function(arg0) {
                getObject(arg0).unmap();
            },
            __wbg_url_3e90676c7072325d: function(arg0, arg1) {
                const ret = getObject(arg1).url;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_view_7685fe4b2845c5b6: function(arg0) {
                const ret = getObject(arg0).view;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            },
            __wbindgen_cast_0000000000000001: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 72, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_1275);
                return addHeapObject(ret);
            },
            __wbindgen_cast_0000000000000002: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("GPUDevice")], shim_idx: 343, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_3688);
                return addHeapObject(ret);
            },
            __wbindgen_cast_0000000000000003: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("MessageEvent")], shim_idx: 237, ret: Unit, inner_ret: Some(Unit) }, mutable: false }) -> Externref`.
                const ret = makeClosure(arg0, arg1, __wasm_bindgen_func_elem_1693);
                return addHeapObject(ret);
            },
            __wbindgen_cast_0000000000000004: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("any")], shim_idx: 343, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_3688_3);
                return addHeapObject(ret);
            },
            __wbindgen_cast_0000000000000005: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("undefined")], shim_idx: 343, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_3688_4);
                return addHeapObject(ret);
            },
            __wbindgen_cast_0000000000000006: function(arg0) {
                // Cast intrinsic for `F64 -> Externref`.
                const ret = arg0;
                return addHeapObject(ret);
            },
            __wbindgen_cast_0000000000000007: function(arg0, arg1) {
                // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
                const ret = getArrayU8FromWasm0(arg0, arg1);
                return addHeapObject(ret);
            },
            __wbindgen_cast_0000000000000008: function(arg0, arg1) {
                // Cast intrinsic for `Ref(String) -> Externref`.
                const ret = getStringFromWasm0(arg0, arg1);
                return addHeapObject(ret);
            },
            __wbindgen_object_clone_ref: function(arg0) {
                const ret = getObject(arg0);
                return addHeapObject(ret);
            },
            __wbindgen_object_drop_ref: function(arg0) {
                takeObject(arg0);
            },
        };
        return {
            __proto__: null,
            "./worker_bg.js": import0,
        };
    }

    function __wasm_bindgen_func_elem_1693(arg0, arg1, arg2) {
        wasm.__wasm_bindgen_func_elem_1693(arg0, arg1, addHeapObject(arg2));
    }

    function __wasm_bindgen_func_elem_1275(arg0, arg1, arg2) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wasm_bindgen_func_elem_1275(retptr, arg0, arg1, addHeapObject(arg2));
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }

    function __wasm_bindgen_func_elem_3688(arg0, arg1, arg2) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wasm_bindgen_func_elem_3688(retptr, arg0, arg1, addHeapObject(arg2));
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }

    function __wasm_bindgen_func_elem_3688_3(arg0, arg1, arg2) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wasm_bindgen_func_elem_3688_3(retptr, arg0, arg1, addHeapObject(arg2));
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }

    function __wasm_bindgen_func_elem_3688_4(arg0, arg1, arg2) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wasm_bindgen_func_elem_3688_4(retptr, arg0, arg1, addHeapObject(arg2));
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }

    function __wasm_bindgen_func_elem_1277(arg0, arg1, arg2, arg3) {
        wasm.__wasm_bindgen_func_elem_1277(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
    }


    const __wbindgen_enum_GpuAutoLayoutMode = ["auto"];


    const __wbindgen_enum_GpuPowerPreference = ["low-power", "high-performance"];


    const __wbindgen_enum_GpuTextureFormat = ["r8unorm", "r8snorm", "r8uint", "r8sint", "r16unorm", "r16snorm", "r16uint", "r16sint", "r16float", "rg8unorm", "rg8snorm", "rg8uint", "rg8sint", "r32uint", "r32sint", "r32float", "rg16unorm", "rg16snorm", "rg16uint", "rg16sint", "rg16float", "rgba8unorm", "rgba8unorm-srgb", "rgba8snorm", "rgba8uint", "rgba8sint", "bgra8unorm", "bgra8unorm-srgb", "rgb9e5ufloat", "rgb10a2uint", "rgb10a2unorm", "rg11b10ufloat", "rg32uint", "rg32sint", "rg32float", "rgba16unorm", "rgba16snorm", "rgba16uint", "rgba16sint", "rgba16float", "rgba32uint", "rgba32sint", "rgba32float", "stencil8", "depth16unorm", "depth24plus", "depth24plus-stencil8", "depth32float", "depth32float-stencil8", "bc1-rgba-unorm", "bc1-rgba-unorm-srgb", "bc2-rgba-unorm", "bc2-rgba-unorm-srgb", "bc3-rgba-unorm", "bc3-rgba-unorm-srgb", "bc4-r-unorm", "bc4-r-snorm", "bc5-rg-unorm", "bc5-rg-snorm", "bc6h-rgb-ufloat", "bc6h-rgb-float", "bc7-rgba-unorm", "bc7-rgba-unorm-srgb", "etc2-rgb8unorm", "etc2-rgb8unorm-srgb", "etc2-rgb8a1unorm", "etc2-rgb8a1unorm-srgb", "etc2-rgba8unorm", "etc2-rgba8unorm-srgb", "eac-r11unorm", "eac-r11snorm", "eac-rg11unorm", "eac-rg11snorm", "astc-4x4-unorm", "astc-4x4-unorm-srgb", "astc-5x4-unorm", "astc-5x4-unorm-srgb", "astc-5x5-unorm", "astc-5x5-unorm-srgb", "astc-6x5-unorm", "astc-6x5-unorm-srgb", "astc-6x6-unorm", "astc-6x6-unorm-srgb", "astc-8x5-unorm", "astc-8x5-unorm-srgb", "astc-8x6-unorm", "astc-8x6-unorm-srgb", "astc-8x8-unorm", "astc-8x8-unorm-srgb", "astc-10x5-unorm", "astc-10x5-unorm-srgb", "astc-10x6-unorm", "astc-10x6-unorm-srgb", "astc-10x8-unorm", "astc-10x8-unorm-srgb", "astc-10x10-unorm", "astc-10x10-unorm-srgb", "astc-12x10-unorm", "astc-12x10-unorm-srgb", "astc-12x12-unorm", "astc-12x12-unorm-srgb"];


    const __wbindgen_enum_ReadableStreamType = ["bytes"];
    const IntoUnderlyingByteSourceFinalization = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(ptr => wasm.__wbg_intounderlyingbytesource_free(ptr, 1));
    const IntoUnderlyingSinkFinalization = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(ptr => wasm.__wbg_intounderlyingsink_free(ptr, 1));
    const IntoUnderlyingSourceFinalization = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(ptr => wasm.__wbg_intounderlyingsource_free(ptr, 1));

    function addHeapObject(obj) {
        if (heap_next === heap.length) heap.push(heap.length + 1);
        const idx = heap_next;
        heap_next = heap[idx];

        heap[idx] = obj;
        return idx;
    }

    const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(state => wasm.__wbindgen_export5(state.a, state.b));

    function debugString(val) {
        // primitive types
        const type = typeof val;
        if (type == 'number' || type == 'boolean' || val == null) {
            return  `${val}`;
        }
        if (type == 'string') {
            return `"${val}"`;
        }
        if (type == 'symbol') {
            const description = val.description;
            if (description == null) {
                return 'Symbol';
            } else {
                return `Symbol(${description})`;
            }
        }
        if (type == 'function') {
            const name = val.name;
            if (typeof name == 'string' && name.length > 0) {
                return `Function(${name})`;
            } else {
                return 'Function';
            }
        }
        // objects
        if (Array.isArray(val)) {
            const length = val.length;
            let debug = '[';
            if (length > 0) {
                debug += debugString(val[0]);
            }
            for(let i = 1; i < length; i++) {
                debug += ', ' + debugString(val[i]);
            }
            debug += ']';
            return debug;
        }
        // Test for built-in
        const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
        let className;
        if (builtInMatches && builtInMatches.length > 1) {
            className = builtInMatches[1];
        } else {
            // Failed to match the standard '[object ClassName]'
            return toString.call(val);
        }
        if (className == 'Object') {
            // we're a user defined class or Object
            // JSON.stringify avoids problems with cycles, and is generally much
            // easier than looping through ownProperties of `val`.
            try {
                return 'Object(' + JSON.stringify(val) + ')';
            } catch (_) {
                return 'Object';
            }
        }
        // errors
        if (val instanceof Error) {
            return `${val.name}: ${val.message}\n${val.stack}`;
        }
        // TODO we could test for more things here, like `Set`s and `Map`s.
        return className;
    }

    function dropObject(idx) {
        if (idx < 1028) return;
        heap[idx] = heap_next;
        heap_next = idx;
    }

    function getArrayJsValueViewFromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        const mem = getDataViewMemory0();
        const result = [];
        for (let i = ptr; i < ptr + 4 * len; i += 4) {
            result.push(getObject(mem.getUint32(i, true)));
        }
        return result;
    }

    function getArrayU8FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
    }

    let cachedDataViewMemory0 = null;
    function getDataViewMemory0() {
        if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
            cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
        }
        return cachedDataViewMemory0;
    }

    function getStringFromWasm0(ptr, len) {
        return decodeText(ptr >>> 0, len);
    }

    let cachedUint8ArrayMemory0 = null;
    function getUint8ArrayMemory0() {
        if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
            cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachedUint8ArrayMemory0;
    }

    function getObject(idx) { return heap[idx]; }

    function handleError(f, args) {
        try {
            return f.apply(this, args);
        } catch (e) {
            wasm.__wbindgen_export3(addHeapObject(e));
        }
    }

    let heap = new Array(1024).fill(undefined);
    heap.push(undefined, null, true, false);

    let heap_next = heap.length;

    function isLikeNone(x) {
        return x === undefined || x === null;
    }

    function makeClosure(arg0, arg1, f) {
        const state = { a: arg0, b: arg1, cnt: 1 };
        const real = (...args) => {

            // First up with a closure we increment the internal reference
            // count. This ensures that the Rust closure environment won't
            // be deallocated while we're invoking it.
            state.cnt++;
            try {
                return f(state.a, state.b, ...args);
            } finally {
                real._wbg_cb_unref();
            }
        };
        real._wbg_cb_unref = () => {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export5(state.a, state.b);
                state.a = 0;
                CLOSURE_DTORS.unregister(state);
            }
        };
        CLOSURE_DTORS.register(real, state, state);
        return real;
    }

    function makeMutClosure(arg0, arg1, f) {
        const state = { a: arg0, b: arg1, cnt: 1 };
        const real = (...args) => {

            // First up with a closure we increment the internal reference
            // count. This ensures that the Rust closure environment won't
            // be deallocated while we're invoking it.
            state.cnt++;
            const a = state.a;
            state.a = 0;
            try {
                return f(a, state.b, ...args);
            } finally {
                state.a = a;
                real._wbg_cb_unref();
            }
        };
        real._wbg_cb_unref = () => {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export5(state.a, state.b);
                state.a = 0;
                CLOSURE_DTORS.unregister(state);
            }
        };
        CLOSURE_DTORS.register(real, state, state);
        return real;
    }

    function passStringToWasm0(arg, malloc, realloc) {
        if (realloc === undefined) {
            const buf = cachedTextEncoder.encode(arg);
            const ptr = malloc(buf.length, 1) >>> 0;
            getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
            WASM_VECTOR_LEN = buf.length;
            return ptr;
        }

        let len = arg.length;
        let ptr = malloc(len, 1) >>> 0;

        const mem = getUint8ArrayMemory0();

        let offset = 0;

        for (; offset < len; offset++) {
            const code = arg.charCodeAt(offset);
            if (code > 0x7F) break;
            mem[ptr + offset] = code;
        }
        if (offset !== len) {
            if (offset !== 0) {
                arg = arg.slice(offset);
            }
            ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
            const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
            const ret = cachedTextEncoder.encodeInto(arg, view);

            offset += ret.written;
            ptr = realloc(ptr, len, offset, 1) >>> 0;
        }

        WASM_VECTOR_LEN = offset;
        return ptr;
    }

    function takeObject(idx) {
        const ret = getObject(idx);
        dropObject(idx);
        return ret;
    }

    let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
    cachedTextDecoder.decode();
    function decodeText(ptr, len) {
        return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
    }

    const cachedTextEncoder = new TextEncoder();

    if (!('encodeInto' in cachedTextEncoder)) {
        cachedTextEncoder.encodeInto = function (arg, view) {
            const buf = cachedTextEncoder.encode(arg);
            view.set(buf);
            return {
                read: arg.length,
                written: buf.length
            };
        };
    }

    let WASM_VECTOR_LEN = 0;

    let wasmModule, wasmInstance, wasm;
    function __wbg_finalize_init(instance, module) {
        wasmInstance = instance;
        wasm = instance.exports;
        wasmModule = module;
        cachedDataViewMemory0 = null;
        cachedUint8ArrayMemory0 = null;
        wasm.__wbindgen_start();
        return wasm;
    }

    async function __wbg_load(module, imports) {
        if (typeof Response === 'function' && module instanceof Response) {
            if (!module.ok) {
                throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
            }

            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);
                } catch (e) {
                    const validResponse = expectedResponseType(module.type);

                    if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else { throw e; }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);
        } else {
            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };
            } else {
                return instance;
            }
        }

        function expectedResponseType(type) {
            switch (type) {
                case 'basic': case 'cors': case 'default': return true;
            }
            return false;
        }
    }

    function initSync(module) {
        if (wasm !== undefined) return wasm;


        if (module !== undefined) {
            if (Object.getPrototypeOf(module) === Object.prototype) {
                ({module} = module)
            } else {
                console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
            }
        }

        const imports = __wbg_get_imports();
        if (!(module instanceof WebAssembly.Module)) {
            module = new WebAssembly.Module(module);
        }
        const instance = new WebAssembly.Instance(module, imports);
        return __wbg_finalize_init(instance, module);
    }

    async function __wbg_init(module_or_path) {
        if (wasm !== undefined) return wasm;


        if (module_or_path !== undefined) {
            if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
                ({module_or_path} = module_or_path)
            } else {
                console.warn('using deprecated parameters for the initialization function; pass a single object instead')
            }
        }

        if (module_or_path === undefined && script_src !== undefined) {
            module_or_path = script_src.replace(/\.js$/, "_bg.wasm");
        }
        const imports = __wbg_get_imports();

        if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
            module_or_path = fetch(module_or_path);
        }

        const { instance, module } = await __wbg_load(await module_or_path, imports);

        return __wbg_finalize_init(instance, module);
    }

    return Object.assign(__wbg_init, { initSync }, exports);
})({ __proto__: null });
