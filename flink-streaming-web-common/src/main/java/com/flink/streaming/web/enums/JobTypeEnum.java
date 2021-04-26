package com.flink.streaming.web.enums;

import com.flink.streaming.common.enums.ExecMode;
import lombok.Getter;

/**
 * @author zhuhuipei
 * @Description:
 * @date 2021/3/28
 * @time 11:14
 */
@Getter
public enum JobTypeEnum {

    SQL_STREAMING(0), JAR(1), SQL_BATCH(2);

    private int code;

    JobTypeEnum(int code) {
        this.code = code;
    }

    public static JobTypeEnum getJobTypeEnum(Integer code) {
        if (code == null) {
            return null;
        }
        for (JobTypeEnum jobTypeEnum : JobTypeEnum.values()) {
            if (code == jobTypeEnum.getCode()) {
                return jobTypeEnum;
            }
        }

        return null;
    }

    public static String getType(JobTypeEnum jobTypeEnum) {

        switch (jobTypeEnum) {
            case SQL_BATCH:
                return ExecMode.BATCH.getName();
            case SQL_STREAMING:
                return ExecMode.STREAMING.getName();
        }
        return null;

    }

}
