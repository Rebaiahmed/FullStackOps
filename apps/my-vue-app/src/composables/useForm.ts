import { ref, reactive, Ref } from 'vue';

type FormErrors<T> = Partial<Record<keyof T, string | null>>;

export function useForm<T extends object>(initialValues: T) {
  const form = reactive({ ...initialValues });

  // Initialize errors as empty object with correct type
  const errors: Ref<FormErrors<T>> = ref({});

  const isSubmitting = ref(false);

  function resetForm() {
    Object.assign(form, initialValues);
    clearErrors();
  }

  function setErrors(newErrors: FormErrors<T>) {
    errors.value = { ...errors.value, ...newErrors };
  }

  function clearErrors() {
    // Clear all error messages by setting them to null
    for (const key in errors.value) {
      if (Object.prototype.hasOwnProperty.call(errors.value, key)) {
        errors.value[key as keyof T] = null;
      }
    }
  }

  // Define a specific type for possible error shapes returned by API
  interface ApiErrorResponse<T> {
    response?: {
      data?: {
        errors?: FormErrors<T>;
      };
    };
  }

  async function submit(
    handler: (form: T) => Promise<unknown>
  ): Promise<void> {
    isSubmitting.value = true;
    clearErrors();

    try {
      await handler(form);
    } catch (err: unknown) {
      const apiError = err as ApiErrorResponse<T>;
      if (apiError?.response?.data?.errors) {
        setErrors(apiError.response.data.errors);
      } else {
        console.error(err);
      }
    } finally {
      isSubmitting.value = false;
    }
  }

  return { form, errors, isSubmitting, submit, resetForm };
}
