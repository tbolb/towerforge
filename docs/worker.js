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
            const ret = wasm.intounderlyingbytesource_pull(this.__wbg_ptr, controller);
            return ret;
        }
        /**
         * @param {ReadableByteStreamController} controller
         */
        start(controller) {
            wasm.intounderlyingbytesource_start(this.__wbg_ptr, controller);
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
            const ret = wasm.intounderlyingsink_abort(ptr, reason);
            return ret;
        }
        /**
         * @returns {Promise<any>}
         */
        close() {
            const ptr = this.__destroy_into_raw();
            const ret = wasm.intounderlyingsink_close(ptr);
            return ret;
        }
        /**
         * @param {any} chunk
         * @returns {Promise<any>}
         */
        write(chunk) {
            const ret = wasm.intounderlyingsink_write(this.__wbg_ptr, chunk);
            return ret;
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
            const ret = wasm.intounderlyingsource_pull(this.__wbg_ptr, controller);
            return ret;
        }
    }
    if (Symbol.dispose) IntoUnderlyingSource.prototype[Symbol.dispose] = IntoUnderlyingSource.prototype.free;
    exports.IntoUnderlyingSource = IntoUnderlyingSource;
    function __wbg_get_imports() {
        const import0 = {
            __proto__: null,
            __wbg_Window_41838cbcc08822b5: function(arg0) {
                const ret = arg0.Window;
                return ret;
            },
            __wbg_WorkerGlobalScope_448e3830f27a30fd: function(arg0) {
                const ret = arg0.WorkerGlobalScope;
                return ret;
            },
            __wbg___wbindgen_debug_string_f249a2a76caa9a55: function(arg0, arg1) {
                const ret = debugString(arg1);
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
            },
            __wbg___wbindgen_is_function_741ff2bb612836f5: function(arg0) {
                const ret = typeof(arg0) === 'function';
                return ret;
            },
            __wbg___wbindgen_is_null_c22311b1cc228e3a: function(arg0) {
                const ret = arg0 === null;
                return ret;
            },
            __wbg___wbindgen_is_string_fc456fee5d3317de: function(arg0) {
                const ret = typeof(arg0) === 'string';
                return ret;
            },
            __wbg___wbindgen_is_undefined_be5b34249ff1fc15: function(arg0) {
                const ret = arg0 === undefined;
                return ret;
            },
            __wbg___wbindgen_memory_17a1178bc3328ea3: function() {
                const ret = wasm.memory;
                return ret;
            },
            __wbg___wbindgen_string_get_7ce8eee7fd327545: function(arg0, arg1) {
                const obj = arg1;
                const ret = typeof(obj) === 'string' ? obj : undefined;
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
            },
            __wbg___wbindgen_throw_4c88d8bf264fd984: function(arg0, arg1) {
                throw new Error(getStringFromWasm0(arg0, arg1));
            },
            __wbg__wbg_cb_unref_09736879a3f67559: function(arg0) {
                arg0._wbg_cb_unref();
            },
            __wbg_arrayBuffer_2c99a9ba14ba536c: function() { return handleError(function (arg0) {
                const ret = arg0.arrayBuffer();
                return ret;
            }, arguments); },
            __wbg_beginComputePass_b3bb1a69e6a70bde: function(arg0, arg1) {
                const ret = arg0.beginComputePass(arg1);
                return ret;
            },
            __wbg_buffer_0eaa216bac6b8749: function(arg0) {
                const ret = arg0.buffer;
                return ret;
            },
            __wbg_buffer_aca05a93c046db1a: function(arg0) {
                const ret = arg0.buffer;
                return ret;
            },
            __wbg_byobRequest_18280c78e462544c: function(arg0) {
                const ret = arg0.byobRequest;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_byteLength_c5f3c188d5252e5b: function(arg0) {
                const ret = arg0.byteLength;
                return ret;
            },
            __wbg_byteOffset_63cdc7b38f33a45e: function(arg0) {
                const ret = arg0.byteOffset;
                return ret;
            },
            __wbg_call_a410eb4b59ed5965: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.call(arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_close_294d3f727cb7a844: function() { return handleError(function (arg0) {
                arg0.close();
            }, arguments); },
            __wbg_close_b49998c52c7ffeca: function(arg0) {
                arg0.close();
            },
            __wbg_close_bf94aa7e38b9a94b: function() { return handleError(function (arg0) {
                arg0.close();
            }, arguments); },
            __wbg_configure_2f4cbe7746e5aa81: function() { return handleError(function (arg0, arg1) {
                arg0.configure(arg1);
            }, arguments); },
            __wbg_construct_8670bb4c2b062969: function() { return handleError(function (arg0, arg1) {
                const ret = Reflect.construct(arg0, arg1);
                return ret;
            }, arguments); },
            __wbg_copyBufferToBuffer_2c8a5726f948b97e: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
                arg0.copyBufferToBuffer(arg1, arg2, arg3, arg4, arg5);
            }, arguments); },
            __wbg_createBindGroup_ec4dc4d9e46e1104: function(arg0, arg1) {
                const ret = arg0.createBindGroup(arg1);
                return ret;
            },
            __wbg_createBuffer_baa81dab839b6c5c: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.createBuffer(arg1);
                return ret;
            }, arguments); },
            __wbg_createCommandEncoder_a5136f45baaba888: function(arg0, arg1) {
                const ret = arg0.createCommandEncoder(arg1);
                return ret;
            },
            __wbg_createComputePipeline_6a05383609fddac6: function(arg0, arg1) {
                const ret = arg0.createComputePipeline(arg1);
                return ret;
            },
            __wbg_createShaderModule_f540847678b68e08: function(arg0, arg1) {
                const ret = arg0.createShaderModule(arg1);
                return ret;
            },
            __wbg_data_c7e5e8500f1bca2f: function(arg0) {
                const ret = arg0.data;
                return ret;
            },
            __wbg_dispatchWorkgroups_74a6ec8812ef9f3b: function(arg0, arg1, arg2, arg3) {
                arg0.dispatchWorkgroups(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0);
            },
            __wbg_document_3b5c3071b43e97ee: function(arg0) {
                const ret = arg0.document;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_end_23ba48463344fbc0: function(arg0) {
                arg0.end();
            },
            __wbg_enqueue_c11626eae1c54509: function() { return handleError(function (arg0, arg1) {
                arg0.enqueue(arg1);
            }, arguments); },
            __wbg_error_757e9472f8410341: function(arg0, arg1) {
                let deferred0_0;
                let deferred0_1;
                try {
                    deferred0_0 = arg0;
                    deferred0_1 = arg1;
                    console.error(getStringFromWasm0(arg0, arg1));
                } finally {
                    wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
                }
            },
            __wbg_fetch_8d9b732df7467c44: function(arg0) {
                const ret = fetch(arg0);
                return ret;
            },
            __wbg_finish_49529a046631ad9a: function(arg0) {
                const ret = arg0.finish();
                return ret;
            },
            __wbg_finish_678df663961386ff: function(arg0, arg1) {
                const ret = arg0.finish(arg1);
                return ret;
            },
            __wbg_getAttribute_c7b80d4010284561: function(arg0, arg1, arg2, arg3) {
                const ret = arg1.getAttribute(getStringFromWasm0(arg2, arg3));
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
            },
            __wbg_getBindGroupLayout_eef82f7f1e8b2d6a: function(arg0, arg1) {
                const ret = arg0.getBindGroupLayout(arg1 >>> 0);
                return ret;
            },
            __wbg_getContext_1938edb9a972f63d: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            }, arguments); },
            __wbg_getDate_a44b5f4a8c42a3c3: function(arg0) {
                const ret = arg0.getDate();
                return ret;
            },
            __wbg_getDay_0ea3aef4bf721d1c: function(arg0) {
                const ret = arg0.getDay();
                return ret;
            },
            __wbg_getFullYear_94114da14f235fca: function(arg0) {
                const ret = arg0.getFullYear();
                return ret;
            },
            __wbg_getHours_d55d13f9f95415bb: function(arg0) {
                const ret = arg0.getHours();
                return ret;
            },
            __wbg_getMappedRange_fd3092e276caa831: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.getMappedRange(arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_getMinutes_d0d71c490ef83b47: function(arg0) {
                const ret = arg0.getMinutes();
                return ret;
            },
            __wbg_getMonth_a4698d688e95d9bd: function(arg0) {
                const ret = arg0.getMonth();
                return ret;
            },
            __wbg_getRandomValues_15fa0548da91ea1c: function() { return handleError(function (arg0) {
                globalThis.crypto.getRandomValues(arg0);
            }, arguments); },
            __wbg_getSeconds_7143dabeecfaf7d1: function(arg0) {
                const ret = arg0.getSeconds();
                return ret;
            },
            __wbg_getTime_edc91481cbc4cd78: function(arg0) {
                const ret = arg0.getTime();
                return ret;
            },
            __wbg_getTimezoneOffset_87127d92c2c117e9: function(arg0) {
                const ret = arg0.getTimezoneOffset();
                return ret;
            },
            __wbg_get_2080c49015e35254: function() { return handleError(function (arg0, arg1) {
                const ret = Reflect.get(arg0, arg1);
                return ret;
            }, arguments); },
            __wbg_gpu_aa311a9494720027: function(arg0) {
                const ret = arg0.gpu;
                return ret;
            },
            __wbg_instanceof_Error_74e3cca0c4a69161: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof Error;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_Response_5b0b4f7f1daeae51: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof Response;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_Window_5cf453f5639aa1a2: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof Window;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_label_b4e9fa173fb30ad5: function(arg0, arg1) {
                const ret = arg1.label;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
            },
            __wbg_length_186163212ffe79c3: function(arg0) {
                const ret = arg0.length;
                return ret;
            },
            __wbg_mapAsync_84aeaa5780c9b8c7: function(arg0, arg1, arg2, arg3) {
                const ret = arg0.mapAsync(arg1 >>> 0, arg2, arg3);
                return ret;
            },
            __wbg_message_43d8c8f1d543a349: function(arg0) {
                const ret = arg0.message;
                return ret;
            },
            __wbg_name_d1fa514fdca6a975: function(arg0) {
                const ret = arg0.name;
                return ret;
            },
            __wbg_navigator_9641ab32fa612dd1: function(arg0) {
                const ret = arg0.navigator;
                return ret;
            },
            __wbg_navigator_c17f443a6fe5d38d: function(arg0) {
                const ret = arg0.navigator;
                return ret;
            },
            __wbg_new_07eab48280c9cd7e: function() { return handleError(function () {
                const ret = new URLSearchParams();
                return ret;
            }, arguments); },
            __wbg_new_0_36d738a0c8cfac43: function() {
                const ret = new Date();
                return ret;
            },
            __wbg_new_13de428334042d26: function(arg0) {
                const ret = new Uint8Array(arg0);
                return ret;
            },
            __wbg_new_277c27c26f94cbc2: function() { return handleError(function () {
                const ret = new Headers();
                return ret;
            }, arguments); },
            __wbg_new_2bfd0f45e60518b1: function() { return handleError(function (arg0, arg1) {
                const ret = new OffscreenCanvas(arg0 >>> 0, arg1 >>> 0);
                return ret;
            }, arguments); },
            __wbg_new_3e95cd7386bb9a6c: function(arg0) {
                const ret = new Date(arg0);
                return ret;
            },
            __wbg_new_68957d2a912dfa0a: function(arg0) {
                const ret = new Int32Array(arg0);
                return ret;
            },
            __wbg_new_787b9fb330d55d78: function(arg0, arg1) {
                const ret = new Error(getStringFromWasm0(arg0, arg1));
                return ret;
            },
            __wbg_new_96baed0986e0d99f: function() { return handleError(function (arg0, arg1) {
                const ret = new URL(getStringFromWasm0(arg0, arg1));
                return ret;
            }, arguments); },
            __wbg_new_bb74001155cb8ca8: function() {
                const ret = new Error();
                return ret;
            },
            __wbg_new_cd4348290afae586: function() {
                const ret = new Object();
                return ret;
            },
            __wbg_new_from_slice_b8daf545a41c6aa0: function(arg0, arg1) {
                const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
                return ret;
            },
            __wbg_new_typed_6b60b99917da27d6: function() {
                const ret = new Object();
                return ret;
            },
            __wbg_new_typed_e09da9dae6ee5935: function(arg0, arg1) {
                try {
                    var state0 = {a: arg0, b: arg1};
                    var cb0 = (arg0, arg1) => {
                        const a = state0.a;
                        state0.a = 0;
                        try {
                            return __wasm_bindgen_func_elem_1294(a, state0.b, arg0, arg1);
                        } finally {
                            state0.a = a;
                        }
                    };
                    const ret = new Promise(cb0);
                    return ret;
                } finally {
                    state0.a = 0;
                }
            },
            __wbg_new_with_byte_offset_and_length_3cd32055a417f095: function(arg0, arg1, arg2) {
                const ret = new Uint8Array(arg0, arg1 >>> 0, arg2 >>> 0);
                return ret;
            },
            __wbg_new_with_length_01b143a7e5dd5a3e: function(arg0) {
                const ret = new Uint8Array(arg0 >>> 0);
                return ret;
            },
            __wbg_new_with_str_and_init_d9f6b5611184e16b: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = new Request(getStringFromWasm0(arg0, arg1), arg2);
                return ret;
            }, arguments); },
            __wbg_new_with_str_f3fabb7c01bc9cf7: function() { return handleError(function (arg0, arg1) {
                const ret = new Request(getStringFromWasm0(arg0, arg1));
                return ret;
            }, arguments); },
            __wbg_new_with_year_month_day_2b03abbebcc8f077: function(arg0, arg1, arg2) {
                const ret = new Date(arg0 >>> 0, arg1, arg2);
                return ret;
            },
            __wbg_of_027eb15371aac932: function(arg0) {
                const ret = Array.of(arg0);
                return ret;
            },
            __wbg_onSubmittedWorkDone_f62945abb48d8a84: function(arg0) {
                const ret = arg0.onSubmittedWorkDone();
                return ret;
            },
            __wbg_postMessage_408dcc1ee376f42d: function() { return handleError(function (arg0, arg1) {
                arg0.postMessage(arg1);
            }, arguments); },
            __wbg_prototypesetcall_13162965d1fe7aa3: function(arg0, arg1, arg2) {
                Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
            },
            __wbg_querySelector_72201b7c62dc196b: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.querySelector(getStringFromWasm0(arg1, arg2));
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            }, arguments); },
            __wbg_queueMicrotask_1e8503a8a690f0a3: function(arg0) {
                const ret = arg0.queueMicrotask;
                return ret;
            },
            __wbg_queueMicrotask_4a1a4d8dd332373b: function(arg0) {
                queueMicrotask(arg0);
            },
            __wbg_queue_41b76331de876d9d: function(arg0) {
                const ret = arg0.queue;
                return ret;
            },
            __wbg_random_df36b90cd78a7d54: function() {
                const ret = Math.random();
                return ret;
            },
            __wbg_requestAdapter_b725cba92e32c4ce: function(arg0, arg1) {
                const ret = arg0.requestAdapter(arg1);
                return ret;
            },
            __wbg_requestDevice_45bc1149c3b98eaf: function(arg0, arg1) {
                const ret = arg0.requestDevice(arg1);
                return ret;
            },
            __wbg_resolve_dbf78ab4942478b0: function(arg0) {
                const ret = Promise.resolve(arg0);
                return ret;
            },
            __wbg_respond_d97c023ee981d1f5: function() { return handleError(function (arg0, arg1) {
                arg0.respond(arg1 >>> 0);
            }, arguments); },
            __wbg_search_88703ce66d1580b3: function(arg0, arg1) {
                const ret = arg1.search;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
            },
            __wbg_setBindGroup_09aa10258bd4dc11: function(arg0, arg1, arg2) {
                arg0.setBindGroup(arg1 >>> 0, arg2);
            },
            __wbg_setPipeline_1368374122476dc8: function(arg0, arg1) {
                arg0.setPipeline(arg1);
            },
            __wbg_set_118fefd528ab0a79: function(arg0, arg1, arg2) {
                arg0.set(arg1, arg2 >>> 0);
            },
            __wbg_set_2793479888329cb6: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = Reflect.set(arg0, arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_set_beginning_of_pass_write_index_bda54c444871cf36: function(arg0, arg1) {
                arg0.beginningOfPassWriteIndex = arg1 >>> 0;
            },
            __wbg_set_binding_49121810d92bb656: function(arg0, arg1) {
                arg0.binding = arg1 >>> 0;
            },
            __wbg_set_buffer_e254d16772ccdf1f: function(arg0, arg1) {
                arg0.buffer = arg1;
            },
            __wbg_set_code_71b4a924b594417d: function(arg0, arg1, arg2) {
                arg0.code = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_compute_6328b3ac805fa957: function(arg0, arg1) {
                arg0.compute = arg1;
            },
            __wbg_set_device_2b7e0e4f69784351: function(arg0, arg1) {
                arg0.device = arg1;
            },
            __wbg_set_end_of_pass_write_index_4b0931cfb0c1f44c: function(arg0, arg1) {
                arg0.endOfPassWriteIndex = arg1 >>> 0;
            },
            __wbg_set_entries_02ae66da25c9ddae: function(arg0, arg1, arg2) {
                arg0.entries = getArrayJsValueViewFromWasm0(arg1, arg2);
            },
            __wbg_set_entry_point_79bb4d8fb01c97ec: function(arg0, arg1, arg2) {
                arg0.entryPoint = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_feb3714f475485ba: function(arg0, arg1, arg2) {
                arg0.set(getArrayU8FromWasm0(arg1, arg2));
            },
            __wbg_set_format_df8baca64e04f5ef: function(arg0, arg1) {
                arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
            },
            __wbg_set_headers_6d75a7df4eb22716: function(arg0, arg1) {
                arg0.headers = arg1;
            },
            __wbg_set_label_1d7c053bc726e08f: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_1e431973068c0ea4: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_2d3e4456ff9a120a: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_89172d31c03b3375: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_a71d5f5c41bed969: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_d133ac18919ae10f: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_e9f1af9890ad68b6: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_f9171cd5c971dbf2: function(arg0, arg1, arg2) {
                arg0.label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_layout_6b757fab7265d0f7: function(arg0, arg1) {
                arg0.layout = arg1;
            },
            __wbg_set_layout_bfddc4788acb0736: function(arg0, arg1) {
                arg0.layout = arg1;
            },
            __wbg_set_layout_gpu_auto_layout_mode_89827b74212f80b4: function(arg0, arg1) {
                arg0.layout = __wbindgen_enum_GpuAutoLayoutMode[arg1];
            },
            __wbg_set_mapped_at_creation_a4cd55019116b792: function(arg0, arg1) {
                arg0.mappedAtCreation = arg1 !== 0;
            },
            __wbg_set_method_639e69af35614d36: function(arg0, arg1, arg2) {
                arg0.method = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_module_bffb3e27ccc03d8d: function(arg0, arg1) {
                arg0.module = arg1;
            },
            __wbg_set_offset_f64_f65aa794a52b87dc: function(arg0, arg1) {
                arg0.offset = arg1;
            },
            __wbg_set_onmessage_4565eb0ef03ee0f9: function(arg0, arg1) {
                arg0.onmessage = arg1;
            },
            __wbg_set_power_preference_06107ba643e66249: function(arg0, arg1) {
                arg0.powerPreference = __wbindgen_enum_GpuPowerPreference[arg1];
            },
            __wbg_set_query_set_a1af7e0b244eb437: function(arg0, arg1) {
                arg0.querySet = arg1;
            },
            __wbg_set_required_features_ef8aeb4d5f909e03: function(arg0, arg1, arg2) {
                arg0.requiredFeatures = getArrayJsValueViewFromWasm0(arg1, arg2);
            },
            __wbg_set_required_limits_a80a53fd4744ccb2: function(arg0, arg1) {
                arg0.requiredLimits = arg1;
            },
            __wbg_set_resource_d37005b6a3d3375f: function(arg0, arg1) {
                arg0.resource = arg1;
            },
            __wbg_set_resource_gpu_buffer_binding_8e9be21bc9a45330: function(arg0, arg1) {
                arg0.resource = arg1;
            },
            __wbg_set_resource_gpu_texture_view_e3bf3810e7168d2b: function(arg0, arg1) {
                arg0.resource = arg1;
            },
            __wbg_set_search_79a1604a24707ef7: function(arg0, arg1, arg2) {
                arg0.search = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_size_f64_04b949f2af8176ba: function(arg0, arg1) {
                arg0.size = arg1;
            },
            __wbg_set_size_f64_2418f77508fb05d7: function(arg0, arg1) {
                arg0.size = arg1;
            },
            __wbg_set_timestamp_writes_90e77f617d9af260: function(arg0, arg1) {
                arg0.timestampWrites = arg1;
            },
            __wbg_set_usage_1d663151adcb7f1a: function(arg0, arg1) {
                arg0.usage = arg1 >>> 0;
            },
            __wbg_stack_575c4e0918581b9c: function(arg0, arg1) {
                const ret = arg1.stack;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
            },
            __wbg_static_accessor_GLOBAL_THIS_003ee833af9699fc: function() {
                const ret = typeof globalThis === 'undefined' ? undefined : globalThis;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_GLOBAL_e4293fb22cbe77da: function() {
                const ret = typeof global === 'undefined' ? undefined : global;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_SELF_53bb20457401453d: function() {
                const ret = typeof self === 'undefined' ? undefined : self;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_WINDOW_b5e0810bfecb7feb: function() {
                const ret = typeof window === 'undefined' ? undefined : window;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_submit_c4379e221512d3fa: function(arg0, arg1, arg2) {
                arg0.submit(getArrayJsValueViewFromWasm0(arg1, arg2));
            },
            __wbg_then_656f253a5dd7d8ea: function(arg0, arg1, arg2) {
                const ret = arg0.then(arg1, arg2);
                return ret;
            },
            __wbg_then_e3f7f2d365708be8: function(arg0, arg1) {
                const ret = arg0.then(arg1);
                return ret;
            },
            __wbg_toString_4d043badaf1f4f69: function(arg0) {
                const ret = arg0.toString();
                return ret;
            },
            __wbg_toString_55ffdf586349746b: function(arg0) {
                const ret = arg0.toString();
                return ret;
            },
            __wbg_unconfigure_7ca436ff70c0bcc3: function(arg0) {
                arg0.unconfigure();
            },
            __wbg_unmap_073211b910c6a369: function(arg0) {
                arg0.unmap();
            },
            __wbg_url_1be993c7b186415b: function(arg0, arg1) {
                const ret = arg1.url;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
            },
            __wbg_view_3b708d3bdaf3fc96: function(arg0) {
                const ret = arg0.view;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_wait_e2865064bee94744: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                const ret = Atomics.wait(arg0, arg1 >>> 0, arg2, arg3);
                return ret;
            }, arguments); },
            __wbindgen_generic_0000000000000001: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 84, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_1292);
                return ret;
            },
            __wbindgen_generic_0000000000000002: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("GPUDevice")], shim_idx: 383, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_4117);
                return ret;
            },
            __wbindgen_generic_0000000000000003: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("MessageEvent")], shim_idx: 274, ret: Unit, inner_ret: Some(Unit) }, mutable: false }) -> Externref`.
                const ret = makeClosure(arg0, arg1, __wasm_bindgen_func_elem_1910);
                return ret;
            },
            __wbindgen_generic_0000000000000004: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("any")], shim_idx: 383, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_4117_14);
                return ret;
            },
            __wbindgen_generic_0000000000000005: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("undefined")], shim_idx: 383, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_4117_15);
                return ret;
            },
            __wbindgen_generic_0000000000000006: function(arg0) {
                // Cast intrinsic for `F64 -> Externref`.
                const ret = arg0;
                return ret;
            },
            __wbindgen_generic_0000000000000007: function(arg0, arg1) {
                // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
                const ret = getArrayU8FromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_generic_0000000000000008: function(arg0, arg1) {
                // Cast intrinsic for `Ref(String) -> Externref`.
                const ret = getStringFromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_init_externref_table: function() {
                const table = wasm.__wbindgen_externrefs;
                table.set(0, undefined);
                table.set(1024, undefined);
                table.set(1025, null);
                table.set(1026, true);
                table.set(1027, false);
            },
        };
        return {
            __proto__: null,
            "./worker_bg.js": import0,
        };
    }

    function __wasm_bindgen_func_elem_1910(arg0, arg1, arg2) {
        wasm.__wasm_bindgen_func_elem_1910(arg0, arg1, arg2);
    }

    function __wasm_bindgen_func_elem_1294(arg0, arg1, arg2, arg3) {
        wasm.__wasm_bindgen_func_elem_1294(arg0, arg1, arg2, arg3);
    }

    function __wasm_bindgen_func_elem_1292(arg0, arg1, arg2) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            wasm.__wasm_bindgen_func_elem_1292(retptr, arg0, arg1, arg2);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            if (r1) {
                throw takeFromExternrefTable0(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }

    function __wasm_bindgen_func_elem_4117(arg0, arg1, arg2) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            wasm.__wasm_bindgen_func_elem_4117(retptr, arg0, arg1, arg2);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            if (r1) {
                throw takeFromExternrefTable0(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }

    function __wasm_bindgen_func_elem_4117_14(arg0, arg1, arg2) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            wasm.__wasm_bindgen_func_elem_4117_14(retptr, arg0, arg1, arg2);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            if (r1) {
                throw takeFromExternrefTable0(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }

    function __wasm_bindgen_func_elem_4117_15(arg0, arg1, arg2) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            wasm.__wasm_bindgen_func_elem_4117_15(retptr, arg0, arg1, arg2);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            if (r1) {
                throw takeFromExternrefTable0(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
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

    function addToExternrefTable0(obj) {
        const idx = wasm.__wbindgen_export5();
        wasm.__wbindgen_externrefs.set(idx, obj);
        return idx;
    }

    const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(state => wasm.__wbindgen_export6(state.a, state.b));

    function debugString(val) {
        switch (typeof val) {
            // primitive types
            case 'number':
            case 'boolean':
            case 'undefined':
            return `${val}`;
            case 'string':
            return JSON.stringify(val);
            case 'bigint':
            return `${val}n`;
            case 'symbol':
            return val.description !== undefined
                ? `Symbol(${val.description})`
                : 'Symbol';
            case 'function':
            return typeof val.name === 'string' && val.name !== ''
                ? `Function(${val.name})`
                : 'Function';
            case 'object': {
                if (val === null) {
                    return 'null';
                }
                // objects
                if (Array.isArray(val)) {
                    return '[' + Array.from(val, debugString).join(', ') + ']';
                }
                // errors
                if (val instanceof Error) {
                    return `${val.name}: ${val.message}\n${val.stack}`;
                }

                const toStringOutput = toString.call(val);
                // Test for built-in
                const className = /\[object ([^\]]+)\]/.exec(toStringOutput)?.[1];

                // Failed to match the standard '[object ClassName]'
                if (className === undefined) {
                    return toStringOutput;
                }
                if (className === 'Object') {
                    // we're a user defined class or Object
                    // JSON.stringify avoids problems with cycles, and is generally much
                    // easier than looping through ownProperties of `val`.
                    try {
                        return 'Object(' + JSON.stringify(val) + ')';
                    } catch (_) {
                        return 'Object';
                    }
                }
                // TODO we could test for more things here, like `Set`s and `Map`s.
                return className;
            }
            // Per MDN: 'This list of values is exhaustive.'
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#description
        }
    }

    function getArrayJsValueViewFromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        const mem = getDataViewMemory0();
        const result = [];
        for (let i = ptr; i < ptr + 4 * len; i += 4) {
            result.push(wasm.__wbindgen_externrefs.get(mem.getUint32(i, true)));
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
        ptr = ptr >>> 0;
        return decodeText(getUint8ArrayMemory0().subarray(ptr, ptr + len));
    }

    let cachedUint8ArrayMemory0 = null;
    function getUint8ArrayMemory0() {
        if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
            cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachedUint8ArrayMemory0;
    }

    function handleError(f, args) {
        try {
            return f.apply(this, args);
        } catch (e) {
            const idx = addToExternrefTable0(e);
            wasm.__wbindgen_export4(idx);
        }
    }

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
                wasm.__wbindgen_export6(state.a, state.b);
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
                wasm.__wbindgen_export6(state.a, state.b);
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

    function takeFromExternrefTable0(idx) {
        const value = wasm.__wbindgen_externrefs.get(idx);
        wasm.__wbindgen_export7(idx);
        return value;
    }

    let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true });
    cachedTextDecoder.decode();
    function decodeText(bytes) {
        return cachedTextDecoder.decode(bytes);
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

    let __wbg_init_promise;
    async function __wbg_init(module_or_path) {
        if (wasm !== undefined) return wasm;
        if (__wbg_init_promise === undefined) {
            __wbg_init_promise = __wbg_init_once(module_or_path);
            __wbg_init_promise.catch(() => { __wbg_init_promise = undefined; });
        }
        return __wbg_init_promise;
    }

    async function __wbg_init_once(module_or_path) {

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
